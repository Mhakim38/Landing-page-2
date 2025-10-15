'use client';

import React from 'react';
import Image from 'next/image';

interface ServicesCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  className?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  icon,
  image,
  className = '',
}) => {
  return (
    <div
      className={`group bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-3 border-b-4 border-transparent hover:border-apb-red ${className}`}
    >
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Price tag overlay - professional look */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <p className="text-apb-red font-bold text-sm">Popular</p>
          </div>
        </div>
      )}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-apb-gray mb-3 group-hover:text-apb-red transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center text-apb-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm">Order Now</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
