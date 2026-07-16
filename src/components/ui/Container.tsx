import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'normal' | 'narrow' | 'wide' | 'full';
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'normal',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const sizeMap = {
    narrow: 'max-w-[760px]',
    normal: 'max-w-[1140px]',
    wide: 'max-w-[1360px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`mx-auto w-full px-6 md:px-12 lg:px-16 ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
