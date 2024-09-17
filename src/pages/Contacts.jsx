import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialIcon from '../components/SocialIcon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Свяжитесь с нами
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">Контактная информация</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-purple-500" />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-purple-500" />
                <span>info@companyname.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-purple-500" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <SocialIcon name="telegram" href="https://t.me/companyname" />
                <SocialIcon name="discord" href="https://discord.gg/companyname" />
                <SocialIcon name="instagram" href="https://www.instagram.com/companyname" />
                <SocialIcon name="whatsapp" href="https://wa.me/1234567890" />
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">Отправить сообщение</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Имя</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Сообщение</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
