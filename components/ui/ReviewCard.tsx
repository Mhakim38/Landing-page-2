'use client';

import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  photo?: string;
  rating: number;
  review: string;
  date?: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  photo,
  rating,
  review,
  date,
  className = '',
}) => {
  return (
    <div className={`bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-apb-gold ${className}`}>
      <div className="flex items-center mb-6">
        {photo ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-apb-gold/20">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl shadow-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-xl text-apb-gray">{name}</h4>
          {date && <p className="text-sm text-gray-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {date}
          </p>}
        </div>
      </div>
      
      <div className="flex mb-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={22}
            className={i < rating ? 'fill-apb-gold text-apb-gold' : 'text-gray-300'}
          />
        ))}
      </div>
      
      <p className="text-gray-700 text-lg leading-relaxed italic relative">
        <span className="text-apb-gold text-4xl absolute -top-2 -left-2 opacity-50">&ldquo;</span>
        <span className="relative z-10">{review}</span>
        <span className="text-apb-gold text-4xl absolute -bottom-4 -right-2 opacity-50">&rdquo;</span>
      </p>
    </div>
  );
};

export default ReviewCard;
