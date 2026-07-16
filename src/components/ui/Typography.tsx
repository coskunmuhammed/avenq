import React from 'react';
import { typography } from '@/lib/design-system/tokens';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'lead' | 'body' | 'caption' | 'mono';
  as?: React.ElementType;
  className?: string;
  muted?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  as,
  className = '',
  muted = false,
  ...props
}) => {
  const defaultElements: Record<string, React.ElementType> = {
    display: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    lead: 'p',
    body: 'p',
    caption: 'span',
    mono: 'span',
  };

  const Component = as || defaultElements[variant] || 'p';

  const variantClasses: Record<string, string> = {
    display: typography.scale.display,
    h1: typography.scale.h1,
    h2: typography.scale.h2,
    h3: typography.scale.h3,
    lead: typography.scale.bodyLead,
    body: typography.scale.body,
    caption: typography.scale.caption,
    mono: `${typography.scale.caption} font-mono uppercase tracking-[0.1em]`,
  };

  const colorClass = muted ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]';

  return (
    <Component className={`${variantClasses[variant]} ${colorClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};
