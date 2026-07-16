import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  status?: 'active' | 'roadmap' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  status = 'neutral',
  className = '',
  ...props
}) => {
  const statusStyles = {
    active: 'bg-[rgba(16,185,129,0.06)] text-[#10B981] border-[rgba(16,185,129,0.2)]',
    roadmap: 'bg-[rgba(99,102,241,0.06)] text-[#818CF8] border-[rgba(99,102,241,0.2)]',
    neutral: 'bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] border-[var(--border-subtle)]',
  };

  const dotColors = {
    active: 'bg-[#10B981]',
    roadmap: 'bg-[#818CF8]',
    neutral: 'bg-[var(--text-tertiary)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] border rounded-full select-none ${statusStyles[status]} ${className}`}
      {...props}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[status]}`} />
      {children}
    </span>
  );
};
