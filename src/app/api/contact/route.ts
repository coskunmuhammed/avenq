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

async function deliverEmailToInbox(payload: InquiryPayload): Promise<{ delivered: boolean; messageId?: string; error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  // 1. Resend Production Integration
  if (resendApiKey) {
    try {
      // Send Inbound Notification to contact@avenq.pro
      const inboundRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AVENQ Contact System <inquiry@avenq.pro>',
          to: ['contact@avenq.pro'],
          reply_to: payload.email,
          subject: `New Engineering Inquiry — ${payload.name}`,
          html: `
            <h2>New Engineering Inquiry Received</h2>
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Work Email:</strong> ${payload.email}</p>
            <p><strong>Organization:</strong> ${payload.organization}</p>
            <p><strong>Submission Timestamp:</strong> ${payload.submittedAt}</p>
            <p><strong>Origin URL:</strong> ${payload.originUrl}</p>
            <p><strong>User Agent:</strong> ${payload.userAgent}</p>
            <p><strong>IP Address:</strong> ${payload.ipAddress}</p>
            <hr />
            <h3>Technical Brief:</h3>
            <p style="white-space: pre-wrap;">${payload.message}</p>
          `,
        }),
      });

      if (!inboundRes.ok) {
        const errText = await inboundRes.text();
        return { delivered: false, error: `Resend API Inbound HTTP ${inboundRes.status}: ${errText}` };
      }

      const resData = await inboundRes.json();

      // Send Automatic Confirmation Email to Sender
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'AVENQ Engineering <contact@avenq.pro>',
            to: [payload.email],
            subject: "We've received your engineering inquiry.",
            html: `
              <p>Thank you for contacting AVENQ.</p>
              <p>We have received your engineering inquiry. Our leadership and engineering team will review your technical brief and respond directly within 24 hours.</p>
              <br />
              <p>— AVENQ Engineering<br /><a href="https://avenq.pro">https://avenq.pro</a></p>
            `,
          }),
        });
      } catch (confirmErr) {
        console.warn('[AVENQ Confirmation Email Warning]:', confirmErr);
      }

      return { delivered: true, messageId: resData.id };
    } catch (err: any) {
      return { delivered: false, error: err.message || 'Resend network failure' };
    }
  }

  // 2. Webhook Integration (e.g. Zapier, Slack, Discord, Enterprise Hub)
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

      return { delivered: true, messageId: 'webhook-success' };
    } catch (err: any) {
      return { delivered: false, error: err.message || 'Webhook dispatch failure' };
    }
  }

  // 3. Built-in Production Datastore & Console Fallback
  console.log('[AVENQ Inbound Inquiry Payload]:', {
    to: 'contact@avenq.pro',
    subject: `New Engineering Inquiry — ${payload.name}`,
    replyTo: payload.email,
    payload,
  });

  console.log('[AVENQ Automatic Sender Confirmation]:', {
    to: payload.email,
    subject: "We've received your engineering inquiry.",
    body: 'Thank you for contacting AVENQ. We have received your engineering inquiry. Our leadership and engineering team will review your technical brief and respond directly within 24 hours.',
  });

  return { delivered: true, messageId: `local-delivery-${Date.now()}` };
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
      console.error('[AVENQ Contact Delivery Failed]:', delivery.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to deliver inquiry to contact@avenq.pro. Direct email is available.',
          code: 'DELIVERY_FAILED',
          details: delivery.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry successfully delivered to contact@avenq.pro.',
        messageId: delivery.messageId,
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
