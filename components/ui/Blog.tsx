'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

interface BlogProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  className?: string;
}

const Blog: React.FC<BlogProps> = ({
  title,
  excerpt,
  image,
  date,
  category,
  className = '',
}) => {
  return (
    <article
      className={`group bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-apb-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-apb-gray mb-2 group-hover:text-apb-red transition-colors duration-300 ease-in-out">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-apb-red font-semibold hover:text-apb-gold transition-colors duration-300 ease-in-out">
          Read More →
        </button>
      </div>
    </article>
  );
};

export default Blog;
