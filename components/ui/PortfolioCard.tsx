'use client';

import React from 'react';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  subtitle,
  image,
  description,
  className = '',
}) => {
  return (
    <div
      className={`group relative bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out ${className}`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-apb-gray mb-2">{title}</h3>
        {subtitle && <p className="text-apb-gold font-semibold mb-2">{subtitle}</p>}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default PortfolioCard;
