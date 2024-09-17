import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  // This is a placeholder for user data. In a real application, this would come from your backend or state management system.
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    joinDate: '01.01.2024',
    projects: [
      { id: 1, name: 'Проект А', status: 'В процессе' },
      { id: 2, name: 'Проект Б', status: 'Завершен' },
      { id: 3, name: 'Проект В', status: 'Планируется' },
    ]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:px-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Добро пожаловать, {user.name}!
            </div>
            <div className="mt-6 text-gray-500 dark:text-gray-400">
              Ваш личный кабинет, где вы можете управлять своими проектами и настройками.
            </div>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Информация о профиле</h3>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>Email: {user.email}</p>
                <p>Дата регистрации: {user.joinDate}</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ваши проекты</h3>
              <ul className="mt-4 space-y-4">
                {user.projects.map((project) => (
                  <li key={project.id} className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{project.name}</span> - {project.status}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 sm:px-20 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <motion.button
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать новый проект
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;