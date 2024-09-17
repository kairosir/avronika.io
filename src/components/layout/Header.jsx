import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Команда', path: '/team' },
    { name: 'Услуги', path: '/services' },
    { name: 'Цены', path: '/pricing' },
    { name: 'Отзывы', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">Avronika</Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-purple-600 md:bg-transparent p-4 md:p-0`}>
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={item.path} 
                  className={`block py-2 md:py-1 px-4 rounded-full transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'bg-white text-purple-600' 
                      : 'hover:bg-purple-500'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <li>
              <Link to="/login" className="block py-2 md:py-1 px-4 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300">
                Войти
              </Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className="ml-4 p-2 rounded-full hover:bg-purple-500 transition-colors duration-300">
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
