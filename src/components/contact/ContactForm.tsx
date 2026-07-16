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
          sourcePage: typeof window !== 'undefined' ? window.location.href : 'https://avenq.pro/contact',
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
        setErrorMessage(data.error || 'Rate limit exceeded. Please wait 10 minutes before submitting again.');
      } else if (response.status === 400 && data.fieldErrors) {
        setStatus('validation_error');
        setFieldErrors(data.fieldErrors);
        setErrorMessage(data.error || 'Please correct the highlighted form errors.');
      } else {
        setStatus('server_error');
        setErrorMessage(data.error || 'Delivery to contact@avenq.pro failed. Please email contact@avenq.pro directly.');
      }
    } catch (err) {
      console.error('[Contact Form Network Error]:', err);
      setStatus('server_error');
      setErrorMessage('Network connection error. Please verify your internet connection or email contact@avenq.pro directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
        <div className="w-12 h-12 rounded-full border border-[#10B981] text-[#10B981] flex items-center justify-center font-mono text-lg">
          ✓
        </div>
        <Typography variant="h2" className="text-2xl md:text-3xl">
          Inquiry Delivered
        </Typography>
        <Typography variant="body" muted className="max-w-md">
          Thank you. Your message has been delivered to <code>contact@avenq.pro</code>. Our team will review your inquiry within 24 hours.
        </Typography>
        <Button
          onClick={() => setStatus('idle')}
          variant="secondary"
          size="sm"
          className="mt-4"
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate aria-label="Technical Inquiry Form">
      <div className="flex flex-col gap-2 mb-2">
        <Typography variant="h3" className="text-xl md:text-2xl">
          Technical Inquiry Form
        </Typography>
        <Typography variant="caption" muted>
          Direct channel to AVENQ leadership (contact@avenq.pro).
        </Typography>
      </div>

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
          label="Your Name"
          name="name"
          placeholder="e.g. Elena Vance"
          value={formData.name}
          onChange={handleChange}
          error={fieldErrors.name}
          required
        />
        <Input
          label="Work Email"
          name="email"
          type="email"
          placeholder="elena@company.com"
          value={formData.email}
          onChange={handleChange}
          error={fieldErrors.email}
          required
        />
      </div>

      <Input
        label="Organization / Company"
        name="organization"
        placeholder="e.g. Real Estate & Hospitality Enterprise"
        value={formData.organization}
        onChange={handleChange}
        error={fieldErrors.organization}
        required
      />

      <Textarea
        label="Platform Brief / Specifications"
        name="message"
        placeholder="Detail your digital business goals, software architecture needs, or platform inquiry..."
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
        {status === 'submitting' ? 'Delivering Inquiry...' : 'Transmit Inquiry'}
      </Button>
    </form>
  );
};
