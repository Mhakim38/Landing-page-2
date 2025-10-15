'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ArrowButtonProps {
  onClick?: () => void;
  direction?: 'left' | 'right';
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  direction = 'right',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center w-12 h-12 bg-apb-red hover:bg-apb-gold rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg ${className}`}
      aria-label={`Arrow ${direction}`}
    >
      <ArrowRight
        size={24}
        className={`text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${
          direction === 'left' ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
};

export default ArrowButton;
