'use client';

import React from 'react';

interface OrangeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
}) => {
  const baseClasses = 'px-8 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg';
  
  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-red-600 to-yellow-400 text-white'
      : 'bg-white text-apb-red border-2 border-apb-red hover:bg-apb-red hover:text-white';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default OrangeButton;
