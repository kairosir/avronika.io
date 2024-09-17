import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Avronika</h3>
            <p className="text-gray-400">Инновационные решения для вашего бизнеса</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Команда</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400">Email: info@avronika.com</p>
            <p className="text-gray-400">Телефон: +7 (123) 456-78-90</p>
            <p className="text-gray-400">Адрес: г. Москва, ул. Примерная, д. 123</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Подпишитесь на нас</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Avronika. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;