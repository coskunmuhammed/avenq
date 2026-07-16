import React from 'react';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

interface CapabilityBlockProps {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

export const CapabilityBlock: React.FC<CapabilityBlockProps> = ({
  number,
  title,
  description,
  outcomes,
}) => {
  return (
    <Card variant="subtle" padding="md" hoverable className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-sm text-[var(--text-tertiary)] tracking-widest">
            [{number}]
          </span>
          <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
            Systems Capability
          </span>
        </div>

        <div>
          <Typography variant="h3" className="text-2xl tracking-tight mb-3">
            {title}
          </Typography>
          <Typography variant="body" muted className="leading-relaxed">
            {description}
          </Typography>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
        <ul className="flex flex-col gap-2">
          {outcomes.map((item, idx) => (
            <li key={idx} className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
              <span className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
