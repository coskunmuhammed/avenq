import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] select-none"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full h-12 px-4 bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] rounded-[4px] text-[var(--text-primary)] text-base md:text-sm transition-colors duration-200 focus:border-[var(--text-primary)] focus:bg-[rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[var(--text-tertiary)] ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 font-mono tracking-wide">{error}</span>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] select-none"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={5}
        className={`w-full p-4 bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] rounded-[4px] text-[var(--text-primary)] text-base md:text-sm transition-colors duration-200 focus:border-[var(--text-primary)] focus:bg-[rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[var(--text-tertiary)] resize-y ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 font-mono tracking-wide">{error}</span>
      )}
    </div>
  );
};
