import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { serviceList } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Наши услуги
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {serviceList.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
