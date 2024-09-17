import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PriceCalculator = () => {
  const [service, setService] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const services = [
    { name: 'Веб-разработка', basePrice: 50000 },
    { name: 'Дизайн', basePrice: 30000 },
    { name: 'SEO-оптимизация', basePrice: 20000 },
    { name: 'Контент-маркетинг', basePrice: 25000 },
  ];

  const calculatePrice = () => {
    const selectedService = services.find(s => s.name === service);
    if (selectedService) {
      setPrice(selectedService.basePrice * quantity);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Калькулятор стоимости</h3>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="service">
          Выберите услугу
        </label>
        <select
          id="service"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Выберите услугу</option>
          {services.map((s, index) => (
            <option key={index} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="quantity">
          Количество
        </label>
        <input
          id="quantity"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          min="1"
        />
      </div>
      <motion.button
        onClick={calculatePrice}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Рассчитать
      </motion.button>
      {price > 0 && (
        <motion.div
          className="mt-4 text-lg font-semibold dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Примерная стоимость: {price.toLocaleString()} ₽
        </motion.div>
      )}
    </motion.div>
  );
};

export default PriceCalculator;