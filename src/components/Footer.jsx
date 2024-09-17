import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CompanyName</h3>
            <p>Инновационные решения для вашего бизнеса</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Контакты</h3>
            <p>Email: info@companyname.com</p>
            <p>Телефон: +7 (123) 456-78-90</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Адрес</h3>
            <p className="flex items-center">
              <MapPin className="mr-2" />
              г. Москва, ул. Примерная, д. 123
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 CompanyName. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;