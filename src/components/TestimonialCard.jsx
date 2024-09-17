import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, company, content, rating }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg p-6"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
      ))}
    </div>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="font-semibold">{name}</div>
    <div className="text-gray-600">{company}</div>
  </motion.div>
);

export default TestimonialCard;