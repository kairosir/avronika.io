import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const faqData = [
  {
    question: "Какие услуги вы предоставляете?",
    answer: "Мы предоставляем широкий спектр услуг, включая веб-разработку, дизайн, SEO-оптимизацию, контент-маркетинг и многое другое. Полный список услуг вы можете найти на странице 'Услуги'."
  },
  {
    question: "Как долго занимает разработка проекта?",
    answer: "Сроки разработки зависят от сложности и масштаба проекта. Обычно небольшие проекты занимают от 2 до 4 недель, в то время как более крупные могут занять несколько месяцев. Мы всегда обсуждаем сроки с клиентом перед началом работы."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем высокое качество выполнения работ и соблюдение сроков. После завершения проекта мы предоставляем гарантийную поддержку в течение 3 месяцев, в рамках которой бесплатно исправляем любые обнаруженные ошибки."
  },
  {
    question: "Можно ли внести изменения в проект после его завершения?",
    answer: "Да, конечно. Мы всегда готовы внести изменения или дополнения в проект даже после его завершения. Стоимость и сроки таких изменений обсуждаются отдельно."
  },
  {
    question: "Как происходит оплата услуг?",
    answer: "Обычно мы работаем по предоплате 50% от стоимости проекта. Оставшаяся сумма выплачивается после завершения работ и принятия их клиентом. Для крупных проектов возможна разбивка оплаты на несколько этапов."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Часто задаваемые вопросы
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;