import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="testimonial-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
            <div className="font-semibold dark:text-white">{testimonial.name}</div>
            <div className="text-gray-600 dark:text-gray-400">{testimonial.company}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
