'use client';

import React, { useState } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export const CareersForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
        <div className="w-12 h-12 rounded-full border border-[#10B981] text-[#10B981] flex items-center justify-center font-mono text-lg">
          ✓
        </div>
        <Typography variant="h2" className="text-2xl md:text-3xl">
          Profile Logged
        </Typography>
        <Typography variant="body" muted className="max-w-md text-sm leading-relaxed">
          Your engineering record has been logged. Engineering leadership reviews profiles directly.
        </Typography>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm" className="mt-4">
          Submit Another Record
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Name" placeholder="Alex Mercer" required />
        <Input label="Email" type="email" placeholder="alex@domain.com" required />
      </div>

      <Input label="Repository / Portfolio" placeholder="https://github.com/username" required />

      <Textarea
        label="Engineering Record"
        placeholder="Detail 1-2 core system problems you solved or software architectures you engineered..."
        required
      />

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Deliver Engineering Profile
      </Button>
    </form>
  );
};
