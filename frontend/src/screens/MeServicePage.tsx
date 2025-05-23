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

const MeServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="M&E Service Hero"
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
            {isEn ? 'Monitoring & Evaluation' : 'Giám Sát & Đánh Giá'}
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
                    en: 'M&E',
                    vi: 'M&E'
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
              {isEn ? 'Monitoring & Evaluation Solutions' : 'Giải Pháp Giám Sát & Đánh Giá'}
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {isEn 
                ? "Our comprehensive M&E solutions help organizations track, measure, and improve their project performance through data-driven insights and systematic evaluation."
                : "Giải pháp M&E toàn diện của chúng tôi giúp tổ chức theo dõi, đo lường và cải thiện hiệu suất dự án thông qua phân tích dữ liệu và đánh giá có hệ thống."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {isEn ? 'Our M&E Services' : 'Dịch Vụ M&E Của Chúng Tôi'}
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
                    <h4 className="text-xl font-bold mb-2">Project Monitoring Systems</h4>
                    <p className="text-gray-600">Real-time monitoring solutions that track project progress, resource utilization, and performance indicators to ensure project success.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Impact Evaluation</h4>
                    <p className="text-gray-600">Comprehensive evaluation frameworks to assess project outcomes, measure impact, and identify areas for improvement.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Data Analytics & Reporting</h4>
                    <p className="text-gray-600">Advanced analytics tools and customized reporting solutions to transform monitoring data into actionable insights.</p>
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
                    <h4 className="text-xl font-bold mb-2">Hệ thống Giám sát Dự án</h4>
                    <p className="text-gray-600">Giải pháp giám sát thời gian thực theo dõi tiến độ dự án, sử dụng tài nguyên và các chỉ số hiệu suất để đảm bảo thành công của dự án.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Đánh giá Tác động</h4>
                    <p className="text-gray-600">Khung đánh giá toàn diện để đánh giá kết quả dự án, đo lường tác động và xác định các lĩnh vực cần cải thiện.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold mb-2">Phân tích & Báo cáo Dữ liệu</h4>
                    <p className="text-gray-600">Công cụ phân tích nâng cao và giải pháp báo cáo tùy chỉnh để chuyển đổi dữ liệu giám sát thành thông tin hữu ích.</p>
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
                        (typeof service.name === 'string' ? service.name : service.name.en) === 'M&E' 
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

export default MeServicePage; 