import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Phone, Send } from 'lucide-react';

const icons = {
  telegram: Send,
  discord: MessageCircle, // Using MessageCircle as an alternative for Discord
  instagram: Instagram,
  whatsapp: Phone,
};

const colors = {
  telegram: 'text-blue-500',
  discord: 'text-indigo-500',
  instagram: 'text-pink-500',
  whatsapp: 'text-green-500',
};

const SocialIcon = ({ name, href }) => {
  const Icon = icons[name];
  const color = colors[name];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} hover:text-gray-800 transition-colors duration-300`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={24} />
    </motion.a>
  );
};

export default SocialIcon;
