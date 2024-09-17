import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Briefcase, Clock, Shield, Zap, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import PriceCalculator from '../components/PriceCalculator';
import { serviceList } from '../data/services';

const Home = () => {
  const features = [
    { icon: <CheckCircle className="text-green-500 w-12 h-12 mb-4" />, title: "Качество", description: "Наши специалисты - профессионалы высокого уровня, гарантирующие отличный результат." },
    { icon: <Users className="text-blue-500 w-12 h-12 mb-4" />, title: "Опытная команда", description: "Мы собрали команду экспертов с многолетним опытом в различных областях." },
    { icon: <Briefcase className="text-purple-500 w-12 h-12 mb-4" />, title: "Разнообразие услуг", description: "От программирования до маркетинга - мы предлагаем широкий спектр услуг." },
    { icon: <Clock className="text-orange-500 w-12 h-12 mb-4" />, title: "Своевременность", description: "Мы ценим ваше время и всегда выполняем проекты в установленные сроки." },
    { icon: <Shield className="text-red-500 w-12 h-12 mb-4" />, title: "Безопасность", description: "Мы гарантируем полную конфиденциальность и защиту ваших данных." },
    { icon: <Zap className="text-yellow-500 w-12 h-12 mb-4" />, title: "Инновации", description: "Мы всегда в курсе последних технологических трендов и применяем инновационные решения." },
    { icon: <Award className="text-indigo-500 w-12 h-12 mb-4" />, title: "Признание", description: "Наша компания отмечена многочисленными наградами в сфере IT и маркетинга." },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Добро пожаловать в Avronika</h1>
            <p className="text-xl md:text-2xl mb-8">Инновационные решения для вашего бизнеса</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Узнать больше
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.slice(0, 6).map((service, index) => (
              <ServiceCard key={index} title={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Все услуги
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Отзывы клиентов</h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Рассчитать стоимость</h2>
          <PriceCalculator />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Свяжитесь с нами</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
