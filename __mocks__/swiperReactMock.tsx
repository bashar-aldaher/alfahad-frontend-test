import React from 'react';

// Mock components as simple divs
const Swiper = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const SwiperSlide = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export { Swiper, SwiperSlide };
export default {
  __esModule: true,
  Swiper,
  SwiperSlide,
};
