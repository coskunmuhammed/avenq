import React from 'react';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductShowcaseCardProps {
  id?: string;
  name: string;
  sentence: string;
  philosophy: string;
  purpose: string;
  statusLabel?: string;
  linkHref?: string;
}

export const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({
  id,
  name,
  sentence,
  philosophy,
  purpose,
  statusLabel = 'Live',
  linkHref,
}) => {
  return (
    <Card id={id} variant="subtle" padding="lg" hoverable className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* Header Status */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-[var(--border-subtle)] pb-4">
          <Badge status="active">{statusLabel}</Badge>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.1em]">
            PUBLIC PLATFORM
          </span>
        </div>

        {/* Product Identity */}
        <div>
          <Typography variant="h2" className="text-3xl md:text-4xl tracking-tight mb-2">
            {name}
          </Typography>
          <p className="text-lg text-[var(--text-primary)] font-medium leading-snug">
            {sentence}
          </p>
        </div>

        {/* Philosophy & Purpose Block */}
        <div className="grid grid-cols-1 gap-4 text-sm pt-1">
          <div className="flex flex-col gap-1 border-l-2 border-[var(--border-medium)] pl-4 py-0.5">
            <p className="text-[var(--text-primary)] font-normal italic">
              "{philosophy}"
            </p>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {purpose}
          </p>
        </div>
      </div>

      {linkHref && (
        <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
          <Button href={linkHref} variant="secondary" size="md" className="w-full">
            Inspect Architecture Specifications
          </Button>
        </div>
      )}
    </Card>
  );
};
