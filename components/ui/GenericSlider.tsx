'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GenericSliderProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  delay?: number;
  pagination?: boolean;
  navigation?: boolean;
  className?: string;
}

const GenericSlider: React.FC<GenericSliderProps> = ({
  children,
  autoplay = true,
  delay = 5000,
  pagination = true,
  navigation = false,
  className = '',
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      loop={true}
      className={className}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GenericSlider;
