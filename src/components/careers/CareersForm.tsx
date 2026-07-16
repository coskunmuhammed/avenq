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
          Profile Received
        </Typography>
        <Typography variant="body" muted className="max-w-md">
          Thank you. Your engineering profile has been logged in our talent database. Our leadership team reviews profiles weekly.
        </Typography>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm" className="mt-4">
          Submit Another Profile
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name" placeholder="e.g. Alex Mercer" required />
        <Input label="Email Address" type="email" placeholder="alex@domain.com" required />
      </div>

      <Input label="GitHub / Portfolio URL" placeholder="https://github.com/username" required />

      <Textarea
        label="Selected Engineering Work"
        placeholder="Briefly describe 1-2 platform problems you solved or systems you engineered..."
        required
      />

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Submit Application Profile
      </Button>
    </form>
  );
};
