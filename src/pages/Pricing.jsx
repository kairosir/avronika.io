import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Базовый',
    price: '10,000 ₽',
    features: [
      'Консультация',
      'Базовый анализ',
      'Отчет о проделанной работе',
    ],
  },
  {
    name: 'Стандарт',
    price: '25,000 ₽',
    features: [
      'Все из Базового плана',
      'Расширенный анализ',
      'Оптимизация процессов',
      'Ежемесячный отчет',
    ],
  },
  {
    name: 'Премиум',
    price: '50,000 ₽',
    features: [
      'Все из Стандартного плана',
      'Персональный менеджер',
      'Приоритетная поддержка 24/7',
      'Ежеквартальный аудит',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Наши тарифы</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-purple-600 text-white py-4 px-6">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <p className="text-sm opacity-75">в месяц</p>
            </div>
            <ul className="p-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="p-6 pt-0">
              <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Выбрать план
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;