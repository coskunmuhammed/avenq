import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  className = '',
  ...props
}) => {
  const colMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    12: 'grid-cols-12',
  };

  const gapMap = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8 lg:gap-10',
    lg: 'gap-8 md:gap-12 lg:gap-16',
    xl: 'gap-12 md:gap-16 lg:gap-24',
  };

  return (
    <div className={`grid ${colMap[cols]} ${gapMap[gap]} ${className}`} {...props}>
      {children}
    </div>
  );
};
