import React from 'react';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductShowcaseCardProps {
  id?: string;
  name: string;
  positioning: string;
  audience: string;
  purpose: string;
  capabilities: string[];
  statusLabel?: string;
  linkHref?: string;
}

export const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({
  id,
  name,
  positioning,
  audience,
  purpose,
  capabilities,
  statusLabel = 'Active Platform',
  linkHref,
}) => {
  return (
    <Card id={id} variant="subtle" padding="lg" hoverable className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-[var(--border-subtle)] pb-4">
          <Badge status="active">{statusLabel}</Badge>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.1em]">
            PROPRIETARY PLATFORM
          </span>
        </div>

        {/* Identity & Positioning */}
        <div>
          <Typography variant="h2" className="text-3xl md:text-4xl tracking-tight mb-2">
            {name}
          </Typography>
          <Typography variant="lead" className="text-[var(--text-secondary)] font-normal mb-4">
            {positioning}
          </Typography>
        </div>

        {/* Factual Product Details */}
        <div className="grid grid-cols-1 gap-5 text-sm">
          {/* Audience */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
              WHO IT IS FOR
            </span>
            <p className="text-[var(--text-primary)] font-normal">{audience}</p>
          </div>

          {/* Purpose */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
              WHAT IT DOES
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">{purpose}</p>
          </div>
        </div>

        {/* Current Capabilities */}
        <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-col gap-3">
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
            CURRENT CAPABILITIES
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {capabilities.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 bg-[var(--text-primary)] rounded-full shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {linkHref && (
        <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
          <Button href={linkHref} variant="secondary" size="md" className="w-full">
            Inspect Product Specifications
          </Button>
        </div>
      )}
    </Card>
  );
};
