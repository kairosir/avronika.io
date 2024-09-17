import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Команда', path: '/team' },
    { name: 'Услуги', path: '/services' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Avronika</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <motion.ul 
          className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-purple-600 md:bg-transparent p-4 md:p-0`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to={item.path} 
                className="block py-2 md:py-0 px-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
