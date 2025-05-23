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

const BroadcastingServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Broadcasting Service Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isEn ? 'Broadcasting' : 'Truyền Thông'}
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
                    en: 'Broadcasting',
                    vi: 'Truyền thông'
                  }
                }
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8">
        {/* Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              {isEn ? 'Broadcasting Solutions' : 'Giải Pháp Truyền Thông'}
          </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {isEn 
                ? "We provide comprehensive broadcasting solutions that enable seamless content delivery, professional media management, and high-quality audio-visual experiences for various industries."
                : "Chúng tôi cung cấp giải pháp truyền thông toàn diện cho phép phân phối nội dung liền mạch, quản lý phương tiện chuyên nghiệp và trải nghiệm nghe nhìn chất lượng cao cho nhiều ngành công nghiệp."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {isEn ? 'Our Broadcasting Solutions' : 'Giải Pháp Truyền Thông Của Chúng Tôi'}
            </h3>
          <div className="space-y-6">
                {isEn ? (
                  <>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Professional Broadcasting Systems</h4>
                    <p className="text-gray-600">Complete broadcasting solutions for television stations, production studios, and media companies, including equipment, software, and integration services.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Digital Content Management</h4>
                    <p className="text-gray-600">Advanced systems for storing, managing, and distributing digital content across multiple platforms and channels efficiently.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Audio-Visual Integration</h4>
                    <p className="text-gray-600">Custom audio-visual solutions for conference rooms, auditoriums, and entertainment venues, ensuring high-quality multimedia experiences.</p>
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
                    <h4 className="text-xl font-bold mb-2">Hệ thống Phát sóng Chuyên nghiệp</h4>
                    <p className="text-gray-600">Giải pháp phát sóng toàn diện cho đài truyền hình, studio sản xuất và công ty truyền thông, bao gồm thiết bị, phần mềm và dịch vụ tích hợp.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Quản lý Nội dung Số</h4>
                    <p className="text-gray-600">Hệ thống tiên tiến để lưu trữ, quản lý và phân phối nội dung số hiệu quả trên nhiều nền tảng và kênh truyền thông.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Tích hợp Âm thanh - Hình ảnh</h4>
                    <p className="text-gray-600">Giải pháp âm thanh - hình ảnh tùy chỉnh cho phòng họp, hội trường và địa điểm giải trí, đảm bảo trải nghiệm đa phương tiện chất lượng cao.</p>
                  </motion.div>
                  </>
                )}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.aside 
          className="w-full lg:w-80 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* All Services List */}
          <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl shadow p-6">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">
              {isEn ? 'All Services' : 'Tất cả dịch vụ'}
            </h4>
            <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li 
                    key={typeof service.name === 'string' ? service.name : service.name.en}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                  <Link
                    to={service.path}
                    className={`flex items-center justify-between px-4 py-2 rounded-md transition-colors font-medium text-gray-700 hover:bg-primary/10 hover:text-primary ${
                      (typeof service.name === 'string' ? service.name : service.name.en) === 'Broadcasting' 
                        ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                        : ''
                    }`}
                  >
                    {typeof service.name === 'string' ? service.name : isEn ? service.name.en : service.name.vi}
                    <FiChevronRight className="ml-2" />
                  </Link>
                  </motion.li>
              ))}
            </ul>
            </div>

            {/* Need Consultation Section */}
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
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default BroadcastingServicePage;