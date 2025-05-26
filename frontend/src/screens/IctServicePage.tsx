import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

const services = [
  { name: { en: 'ICT', vi: 'ICT' }, path: '/services/ict' },
  { name: { en: 'Broadcasting', vi: 'Truyền thông' }, path: '/services/broadcasting' },
  { name: { en: 'Business Application', vi: 'Ứng dụng doanh nghiệp' }, path: '/services/business-application' },
  { name: { en: 'M&E', vi: 'M&E' }, path: '/services/me' },
];

const IctServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="service-hero">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="ICT Service Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="service-hero-content">
          <motion.h1 
            className="service-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ICT
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Breadcrumb
              items={[
                { 
                  name: { 
                    en: 'Home',
                    vi: 'Trang chủ'
                  }, 
                  path: '/' 
                },
                { 
                  name: { 
                    en: 'Services',
                    vi: 'Dịch vụ'
                  }, 
                  path: '/services' 
                },
                { 
                  name: { 
                    en: 'ICT',
                    vi: 'ICT'
                  }
                }
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <div className="service-content">
          {/* Main Content */}
          <div className="service-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                {isEn ? 'Information and Communication Technology Solutions' : 'Giải Pháp Công Nghệ Thông Tin và Truyền Thông'}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  {isEn 
                    ? 'We provide comprehensive ICT solutions that help businesses transform digitally and stay competitive in the modern marketplace.'
                    : 'Chúng tôi cung cấp giải pháp CNTT toàn diện giúp doanh nghiệp chuyển đổi số và duy trì khả năng cạnh tranh trong thị trường hiện đại.'}
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              {isEn ? (
                <>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2">Network Infrastructure</h4>
                  <p className="text-gray-600">Design and implementation of secure, scalable network solutions for enterprise environments.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-2">Cloud Solutions</h4>
                  <p className="text-gray-600">Scalable cloud infrastructure and services enabling digital transformation and business agility.</p>
                </motion.div>
                </>
              ) : (
                <>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2">Hạ tầng Mạng</h4>
                  <p className="text-gray-600">Thiết kế và triển khai giải pháp mạng an toàn, có khả năng mở rộng cho môi trường doanh nghiệp.</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-2">Giải pháp Đám mây</h4>
                  <p className="text-gray-600">Cơ sở hạ tầng và dịch vụ đám mây có khả năng mở rộng cho phép chuyển đổi số và linh hoạt trong kinh doanh.</p>
                </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <motion.aside 
            className="service-sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* All Services List */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {isEn ? 'Our Services' : 'Dịch Vụ Của Chúng Tôi'}
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className={`block py-2 px-3 rounded transition-colors duration-200 ${
                        location.pathname === service.path
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {isEn ? service.name.en : service.name.vi}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <motion.div 
              className="bg-primary/10 rounded-xl shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">
                    {isEn ? 'Need Consultation?' : 'Cần Tư Vấn?'}
                  </h4>
                  <p className="text-gray-600">
                    {isEn ? 'Our experts are here to help' : 'Các chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ'}
                  </p>
                </div>
              </div>
              <motion.a 
                href="/contact" 
                className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isEn ? 'Contact Us' : 'Liên Hệ Ngay'}
                <FiChevronRight className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default IctServicePage;
