import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

interface NewsItem {
  id: number;
  title: {
    en: string;
    vi: string;
  };
  category: string;
  excerpt: {
    en: string;
    vi: string;
  };
  image: string;
  date: string;
  author: string;
}

const News: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const newsItems: NewsItem[] = [
    // AI & Technology News
    {
      id: 1,
      title: {
        en: "AI Vietnam Enters New Era",
        vi: "AI Việt Nam Bước Vào Kỷ Nguyên Mới"
      },
      category: "technology",
      excerpt: {
        en: "Vietnam's artificial intelligence sector is experiencing unprecedented growth with new breakthroughs and innovations",
        vi: "Lĩnh vực trí tuệ nhân tạo Việt Nam đang trải qua sự tăng trưởng chưa từng có với những đột phá và đổi mới mới"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-20",
      author: "AI Research Team"
    },
    {
      id: 2,
      title: {
        en: "Big Data and Cloud Computing Revolution",
        vi: "BIG DATA VÀ ĐIỆN TOÁN ĐÁM MÂY"
      },
      category: "technology",
      excerpt: {
        en: "Revolutionary developments in big data analytics and cloud computing infrastructure",
        vi: "Những phát triển mang tính cách mạng trong phân tích dữ liệu lớn và cơ sở hạ tầng điện toán đám mây"
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      date: "2024-01-18",
      author: "Data Science Division"
    },
    {
      id: 3,
      title: {
        en: "What is Network Switch Technology?",
        vi: "Bộ Chuyển Mạch Mạng Là Gì?"
      },
      category: "technology",
      excerpt: {
        en: "Comprehensive guide to network switching technology and its role in modern infrastructure",
        vi: "Hướng dẫn toàn diện về công nghệ chuyển mạch mạng và vai trò của nó trong cơ sở hạ tầng hiện đại"
      },
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-15",
      author: "Network Engineering Team"
    },
    {
      id: 4,
      title: {
        en: "Supporting Systems and Infrastructure",
        vi: "Các Hệ Thống Phụ Trợ"
      },
      category: "infrastructure",
      excerpt: {
        en: "Essential supporting systems that ensure smooth operation of enterprise networks and services",
        vi: "Các hệ thống phụ trợ thiết yếu đảm bảo hoạt động trơn tru của mạng doanh nghiệp và dịch vụ"
      },
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-12",
      author: "Infrastructure Team"
    },
    {
      id: 5,
      title: {
        en: "NetCorp Launches New Cloud Solutions",
        vi: "NetCorp Ra Mắt Giải Pháp Đám Mây Mới"
      },
      category: "technology",
      excerpt: {
        en: "Leading-edge cloud infrastructure solutions for enterprise clients",
        vi: "Giải pháp cơ sở hạ tầng đám mây tiên tiến cho khách hàng doanh nghiệp"
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      date: "2024-01-10",
      author: "NetCorp Team"
    },
    {
      id: 6,
      title: {
        en: "AI Integration in Business Applications",
        vi: "Tích Hợp AI Trong Ứng Dụng Doanh Nghiệp"
      },
      category: "technology",
      excerpt: {
        en: "Revolutionary AI-powered business intelligence solutions",
        vi: "Giải pháp trí tuệ doanh nghiệp được hỗ trợ bởi AI"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-08",
      author: "Tech Division"
    },
    {
      id: 7,
      title: {
        en: "Cybersecurity Trends 2024",
        vi: "Xu Hướng Bảo Mật Mạng 2024"
      },
      category: "security",
      excerpt: {
        en: "Latest developments in network security and threat prevention",
        vi: "Những phát triển mới nhất trong bảo mật mạng và ngăn chặn mối đe dọa"
      },
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-05",
      author: "Security Team"
    },
    {
      id: 8,
      title: {
        en: "Digital Transformation in Manufacturing",
        vi: "Chuyển Đổi Số Trong Sản Xuất"
      },
      category: "industry",
      excerpt: {
        en: "How Industry 4.0 is reshaping manufacturing processes",
        vi: "Cách Công nghiệp 4.0 đang định hình lại quy trình sản xuất"
      },
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      date: "2024-01-03",
      author: "Industry Solutions"
    }
  ];

  const categories = [
    { id: 'all', label: currentLanguage === 'vi' ? 'TẤT CẢ' : 'ALL', count: newsItems.length },
    { id: 'technology', label: currentLanguage === 'vi' ? 'CÔNG NGHỆ' : 'TECHNOLOGY', count: newsItems.filter(n => n.category === 'technology').length },
    { id: 'infrastructure', label: currentLanguage === 'vi' ? 'CƠ SỞ HẠ TẦNG' : 'INFRASTRUCTURE', count: newsItems.filter(n => n.category === 'infrastructure').length },
    { id: 'security', label: currentLanguage === 'vi' ? 'BẢO MẬT' : 'SECURITY', count: newsItems.filter(n => n.category === 'security').length },
    { id: 'industry', label: currentLanguage === 'vi' ? 'NGÀNH NGHỀ' : 'INDUSTRY', count: newsItems.filter(n => n.category === 'industry').length }
  ];

  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(news => news.category === activeCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="News Hero Background"
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentLanguage === 'vi' ? 'TIN TỨC' : 'NEWS'}
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
                      en: 'News',
                      vi: 'Tin tức'
                    }
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4">

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <motion.article 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl hover:bg-primary transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${news.id}`)}
              >
                {/* Image Section with Metadata Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={currentLanguage === 'vi' ? news.title.vi : news.title.en}
                    className="w-full h-full object-cover"
                  />

                </div>
                
                {/* Dark Content Section */}
                <div className="bg-white p-6 text-center group-hover:bg-primary transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide leading-tight max-w-xs mx-auto group-hover:text-white transition-colors duration-300">
                    {currentLanguage === 'vi' ? news.title.vi : news.title.en}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {currentLanguage === 'vi' ? news.excerpt.vi : news.excerpt.en}
                  </p>
                  <p className="text-xs text-gray-500 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {currentLanguage === 'vi' ? 'Nhấp để đọc thêm' : 'Click to read more'}
                  </p>
                  
                  {/* Circular Button */}
                  <div className="flex justify-center">
                    <button 
                      onClick={() => navigate(`/blog/${news.id}`)}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 hover:bg-primary hover:scale-110 cursor-pointer"
                    >
                      <svg className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default News; 