import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, image, description, quality }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg p-6"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
    <p className="text-gray-600 text-center mb-2">{role}</p>
    <p className="text-gray-700 text-center mb-4">{description}</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full" style={{ width: `${quality}%` }}></div>
    </div>
    <p className="text-center mt-2 text-sm text-gray-600">Качество работы: {quality}%</p>
  </motion.div>
);

export default TeamMember;