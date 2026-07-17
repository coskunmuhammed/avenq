import { NextResponse } from 'next/server';

// In-memory rate limiting store (5 requests per 10 minutes per IP)
const rateLimitStore = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitStore.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

function sanitizeInput(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

interface InquiryPayload {
  name: string;
  email: string;
  organization: string;
  message: string;
  submittedAt: string;
  originUrl: string;
  userAgent: string;
  ipAddress: string;
}

async function deliverEmailToInbox(payload: InquiryPayload): Promise<{ delivered: boolean; messageId?: string; error?: string; provider?: string }> {
  const brevoApiKey = process.env.BREVO_API_KEY ? process.env.BREVO_API_KEY.trim().replace(/^["']|["']$/g, '') : null;
  const resendApiKey = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.trim().replace(/^["']|["']$/g, '') : null;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL ? process.env.CONTACT_WEBHOOK_URL.trim() : null;

  // 1. Brevo (Sendinblue) API Integration
  if (brevoApiKey) {
    // Check if user accidentally provided an SMTP Key instead of v3 API Key
    if (brevoApiKey.startsWith('xsmtpsib-')) {
      return {
        delivered: false,
        error: 'Brevo Key Error: An SMTP Key (xsmtpsib-...) was provided. Please use an API v3 Key (starts with xkeysib-...) from Brevo Dashboard -> API Keys tab.',
      };
    }

    try {
      const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || 'contact@avenq.pro';
      const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@avenq.pro';

      const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': brevoApiKey,
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'AVENQ Contact System', email: senderEmail },
          to: [{ email: recipientEmail, name: 'AVENQ Leadership' }],
          replyTo: { email: payload.email, name: payload.name },
          subject: `New Engineering Inquiry — ${payload.name}`,
          htmlContent: `
            <div style="font-family: monospace, sans-serif; background-color: #0b0b0b; color: #ffffff; padding: 24px; border-radius: 6px;">
              <h2 style="border-bottom: 1px solid #333; padding-bottom: 12px; color: #ffffff;">New Engineering Inquiry Received</h2>
              <p><strong>Name:</strong> ${payload.name}</p>
              <p><strong>Work Email:</strong> <a href="mailto:${payload.email}" style="color: #60a5fa;">${payload.email}</a></p>
              <p><strong>Organization:</strong> ${payload.organization}</p>
              <p><strong>Submission Timestamp:</strong> ${payload.submittedAt}</p>
              <p><strong>Origin URL:</strong> ${payload.originUrl}</p>
              <p><strong>IP Address:</strong> ${payload.ipAddress}</p>
              <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
              <h3 style="color: #ffffff;">Technical Brief:</h3>
              <div style="background-color: #141414; padding: 16px; border-radius: 4px; white-space: pre-wrap; color: #e5e7eb; border: 1px solid #262626;">${payload.message}</div>
            </div>
          `,
        }),
      });

      if (brevoRes.ok) {
        const brevoData = await brevoRes.json();

        // Send confirmation email to sender
        try {
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'api-key': brevoApiKey,
              accept: 'application/json',
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              sender: { name: 'AVENQ Engineering', email: senderEmail },
              to: [{ email: payload.email, name: payload.name }],
              subject: "We've received your engineering inquiry.",
              htmlContent: `
                <div style="font-family: sans-serif; color: #111827; max-width: 600px; padding: 24px;">
                  <p>Hello ${payload.name},</p>
                  <p>Thank you for reaching out to AVENQ.</p>
                  <p>We have received your engineering inquiry regarding <strong>${payload.organization}</strong>. Our leadership and engineering team will review your technical brief and respond directly within 24 hours.</p>
                  <br />
                  <p>Best regards,<br /><strong>AVENQ Engineering</strong><br /><a href="https://avenq.pro">https://avenq.pro</a></p>
                </div>
              `,
            }),
          });
        } catch (confirmErr) {
          console.warn('[Brevo Confirmation Warning]:', confirmErr);
        }

        return { delivered: true, messageId: brevoData.messageId || 'brevo-success', provider: 'Brevo' };
      } else {
        const errText = await brevoRes.text();
        console.error('[Brevo Error Response]:', errText);
        if (brevoRes.status === 401) {
          return {
            delivered: false,
            error: 'Brevo HTTP 401: Invalid API Key or Brevo sender email unverified. Ensure key is from Brevo -> API Keys (starts with xkeysib-). Set BREVO_SENDER_EMAIL in Vercel to your registered Brevo account email.',
          };
        }
        return { delivered: false, error: `Brevo HTTP ${brevoRes.status}: ${errText}` };
      }
    } catch (err: any) {
      return { delivered: false, error: err.message || 'Brevo API network failure' };
    }
  }

  // 2. Resend API Integration
  if (resendApiKey) {
    try {
      const senderEmail = process.env.RESEND_FROM_EMAIL || 'AVENQ Contact <onboarding@resend.dev>';
      const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@avenq.pro';
      
      const inboundRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: payload.email,
          subject: `New Engineering Inquiry — ${payload.name}`,
          html: `
            <div style="font-family: monospace, sans-serif; background-color: #0b0b0b; color: #ffffff; padding: 24px; border-radius: 6px;">
              <h2 style="border-bottom: 1px solid #333; padding-bottom: 12px; color: #ffffff;">New Engineering Inquiry Received</h2>
              <p><strong>Name:</strong> ${payload.name}</p>
              <p><strong>Work Email:</strong> <a href="mailto:${payload.email}" style="color: #60a5fa;">${payload.email}</a></p>
              <p><strong>Organization:</strong> ${payload.organization}</p>
              <p><strong>Submission Timestamp:</strong> ${payload.submittedAt}</p>
              <p><strong>Origin URL:</strong> ${payload.originUrl}</p>
              <p><strong>IP Address:</strong> ${payload.ipAddress}</p>
              <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
              <h3 style="color: #ffffff;">Technical Brief:</h3>
              <div style="background-color: #141414; padding: 16px; border-radius: 4px; white-space: pre-wrap; color: #e5e7eb; border: 1px solid #262626;">${payload.message}</div>
            </div>
          `,
        }),
      });

      if (inboundRes.ok) {
        const resData = await inboundRes.json();
        
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: senderEmail,
              to: [payload.email],
              subject: "We've received your engineering inquiry.",
              html: `
                <div style="font-family: sans-serif; color: #111827; max-width: 600px; padding: 24px;">
                  <p>Hello ${payload.name},</p>
                  <p>Thank you for reaching out to AVENQ.</p>
                  <p>We have received your engineering inquiry regarding <strong>${payload.organization}</strong>. Our leadership and engineering team will review your technical brief and respond directly within 24 hours.</p>
                  <br />
                  <p>Best regards,<br /><strong>AVENQ Engineering</strong><br /><a href="https://avenq.pro">https://avenq.pro</a></p>
                </div>
              `,
            }),
          });
        } catch (confirmErr) {
          console.warn('[AVENQ Confirmation Email Warning]:', confirmErr);
        }

        return { delivered: true, messageId: resData.id, provider: 'Resend' };
      } else {
        const errText = await inboundRes.text();
        console.error('[Resend Error Response]:', errText);
        return { delivered: false, error: `Resend HTTP ${inboundRes.status}: ${errText}` };
      }
    } catch (err: any) {
      return { delivered: false, error: err.message || 'Resend network failure' };
    }
  }

  // 3. Webhook Integration
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: 'contact@avenq.pro',
          replyTo: payload.email,
          inboundSubject: `New Engineering Inquiry — ${payload.name}`,
          confirmationSubject: "We've received your engineering inquiry.",
          ...payload,
        }),
      });

      if (!res.ok) {
        return { delivered: false, error: `Webhook HTTP ${res.status}` };
      }

      return { delivered: true, messageId: 'webhook-success', provider: 'Webhook' };
    } catch (err: any) {
      return { delivered: false, error: err.message || 'Webhook dispatch failure' };
    }
  }

  // 4. Unconfigured Environment Warning
  console.warn(
    '[AVENQ CONTACT NOTICE]: No BREVO_API_KEY, RESEND_API_KEY, or CONTACT_WEBHOOK_URL set on Vercel. Form payload logged below:'
  );
  console.log('[Inbound Payload]:', payload);

  return {
    delivered: false,
    error: 'Server email service not configured. Please set BREVO_API_KEY or RESEND_API_KEY in Vercel Environment Variables.',
    provider: 'None',
  };
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Unknown User-Agent';
    const referer = request.headers.get('referer') || request.headers.get('origin') || 'https://avenq.pro/contact';

    // Rate Limiting
    if (isRateLimited(ipAddress)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Submission limit reached. Retrying permitted after 10 minutes.',
          code: 'RATE_LIMITED',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, organization, message, honeypot } = body;

    // Honeypot Anti-Spam Check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Valid name required (minimum 2 characters).';
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      errors.email = 'Valid work email address required.';
    }

    if (!organization || typeof organization !== 'string' || organization.trim().length < 2) {
      errors.organization = 'Organization or business name required.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Technical brief required (minimum 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Correct the highlighted fields.',
          fieldErrors: errors,
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      );
    }

    const payload: InquiryPayload = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      organization: sanitizeInput(organization),
      message: sanitizeInput(message),
      submittedAt: new Date().toISOString(),
      originUrl: sanitizeInput(referer),
      userAgent: sanitizeInput(userAgent),
      ipAddress: sanitizeInput(ipAddress),
    };

    // Attempt Real Email Inbox Delivery & Confirmation Dispatch
    const delivery = await deliverEmailToInbox(payload);

    if (!delivery.delivered) {
      return NextResponse.json(
        {
          success: false,
          error: delivery.error || 'Failed to deliver inquiry to contact@avenq.pro. Direct email is available.',
          code: 'DELIVERY_FAILED',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry successfully delivered to contact@avenq.pro.',
        messageId: delivery.messageId,
        provider: delivery.provider,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('[AVENQ Contact Route Error]:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your inquiry.',
        code: 'SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}
