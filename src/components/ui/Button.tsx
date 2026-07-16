import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  external = false,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cubic-bezier(0.16,1,0.3,1) focus-visible:outline-none disabled:opacity-40 disabled:pointer-events-none rounded-[4px] cursor-pointer select-none';

  const variantClasses = {
    primary:
      'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-92 active:scale-[0.985] shadow-sm',
    secondary:
      'bg-transparent text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.035)] active:scale-[0.985]',
    ghost:
      'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.03)] active:scale-[0.99]',
  };

  const sizeClasses = {
    sm: 'h-9 px-4 text-xs tracking-wide',
    md: 'h-11 px-6 text-sm tracking-tight',
    lg: 'h-13 px-8 text-[15px] tracking-tight',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
