'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animation = 'up',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: unobserve after animation triggers once
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'left':
        return 'scroll-animate-left';
      case 'right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  const getDelayClass = () => {
    if (delay > 0 && delay <= 6) {
      return `scroll-animate-delay-${delay}`;
    }
    return '';
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${getDelayClass()} ${
        isVisible ? 'visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
