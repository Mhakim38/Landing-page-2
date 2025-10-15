'use client';

import React, { useEffect, useState, useRef, useId } from 'react';

interface CustomeTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const CustomeText: React.FC<CustomeTextProps> = ({
  children,
  className = '',
  animated = false,
  as: Component = 'p',
}) => {
  const [isVisible, setIsVisible] = useState(!animated);
  const elementRef = useRef<HTMLElement>(null);
  const uniqueId = useId();

  useEffect(() => {
    if (!animated || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animated]);

  return (
    <Component
      ref={elementRef as any}
      id={`custome-text-${uniqueId}`}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default CustomeText;
