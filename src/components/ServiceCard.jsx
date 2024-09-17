import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg overflow-hidden"
    whileHover={{ scale: 1.05, backgroundColor: "#F3E8FF" }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">{title}</h3>
      <p className="text-gray-600">Описание услуги {title.toLowerCase()}. Мы предоставляем высококачественные решения для вашего бизнеса.</p>
    </div>
  </motion.div>
);

export default ServiceCard;