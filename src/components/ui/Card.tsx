import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'subtle' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'subtle',
  padding = 'md',
  className = '',
  hoverable = false,
  ...props
}) => {
  const variantMap = {
    subtle: 'bg-[#141414] border border-[var(--border-subtle)]',
    elevated: 'bg-[#1C1C1C] border border-[var(--border-medium)]',
    bordered: 'bg-transparent border border-[var(--border-subtle)]',
  };

  const paddingMap = {
    none: 'p-0',
    sm: 'p-5 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  const hoverClasses = hoverable
    ? 'transition-colors duration-200 hover:border-[var(--border-active)] hover:bg-[rgba(255,255,255,0.03)]'
    : '';

  return (
    <div
      className={`rounded-[6px] relative ${variantMap[variant]} ${paddingMap[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
