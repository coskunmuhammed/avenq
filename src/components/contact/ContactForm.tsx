'use client';

import React, { useState } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

type FormStatus = 'idle' | 'submitting' | 'success' | 'validation_error' | 'server_error' | 'rate_limited';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    website_url_honeypot: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          honeypot: formData.website_url_honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
          website_url_honeypot: '',
        });
      } else if (response.status === 429) {
        setStatus('rate_limited');
        setErrorMessage(data.error || 'Submission limit reached. Retrying permitted after 10 minutes.');
      } else if (response.status === 400 && data.fieldErrors) {
        setStatus('validation_error');
        setFieldErrors(data.fieldErrors);
        setErrorMessage(data.error || 'Correct the highlighted fields to continue.');
      } else {
        setStatus('server_error');
        setErrorMessage(data.error || 'Transmission unconfirmed. Please try again.');
      }
    } catch (err) {
      console.error('[Contact Form Network Error]:', err);
      setStatus('server_error');
      setErrorMessage('Network connection lost. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
        <div className="w-12 h-12 rounded-full border border-[#10B981] text-[#10B981] flex items-center justify-center font-mono text-lg">
          ✓
        </div>
        <Typography variant="h2" className="text-2xl md:text-3xl">
          Brief Transmitted
        </Typography>
        <Typography variant="body" muted className="max-w-md text-sm leading-relaxed">
          Your inquiry has been delivered directly to <code>contact@avenq.pro</code>. A confirmation email has been sent to your inbox.
        </Typography>
        <Button
          onClick={() => setStatus('idle')}
          variant="secondary"
          size="sm"
          className="mt-4"
        >
          Transmit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate aria-label="Direct Engineering Inquiry Form">
      {/* Anti-Spam Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_honeypot">Do not fill this field</label>
        <input
          type="text"
          id="website_url_honeypot"
          name="website_url_honeypot"
          value={formData.website_url_honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Global Error Banner */}
      {errorMessage && (
        <div
          role="alert"
          className={`p-4 rounded-[4px] border text-xs font-mono tracking-wide ${
            status === 'rate_limited'
              ? 'bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.3)] text-[#FBBF24]'
              : 'bg-[rgba(239,68,68,0.08)] border-[rgba(239,68,68,0.3)] text-[#F87171]'
          }`}
        >
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          placeholder="Elena Vance"
          value={formData.name}
          onChange={handleChange}
          error={fieldErrors.name}
          required
        />
        <Input
          label="Work Email"
          name="email"
          type="email"
          placeholder="elena@organization.com"
          value={formData.email}
          onChange={handleChange}
          error={fieldErrors.email}
          required
        />
      </div>

      <Input
        label="Organization"
        name="organization"
        placeholder="Enterprise / Business Name"
        value={formData.organization}
        onChange={handleChange}
        error={fieldErrors.organization}
        required
      />

      <Textarea
        label="Technical Brief"
        name="message"
        placeholder="State your software architecture requirements, system scope, or platform goals..."
        value={formData.message}
        onChange={handleChange}
        error={fieldErrors.message}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Transmitting Brief...' : 'Deliver Technical Brief'}
      </Button>
    </form>
  );
};
