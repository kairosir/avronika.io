import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Отзывы наших клиентов
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;