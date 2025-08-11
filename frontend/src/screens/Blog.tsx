import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

interface BlogPost {
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
  content: {
    en: string;
    vi: string;
  };
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Mock blog post data - in a real app, this would come from an API
  const blogPost: BlogPost = {
    id: parseInt(id || '1'),
    title: {
      en: "AI Vietnam Enters New Era",
      vi: "AI Việt Nam Bước Vào Kỷ Nguyên Mới"
    },
    category: "technology",
    excerpt: {
      en: "Vietnam's artificial intelligence sector is experiencing unprecedented growth with new breakthroughs and innovations",
      vi: "Lĩnh vực trí tuệ nhân tạo Việt Nam đang trải qua sự tăng trưởng chưa từng có với những đột phá và đổi mới mới"
    },
    content: {
      en: `Vietnam's artificial intelligence sector is experiencing unprecedented growth, marking a significant milestone in the country's technological advancement. With new breakthroughs and innovations emerging across various industries, Vietnam is positioning itself as a key player in the global AI landscape.

      ## Current State of AI in Vietnam

      ### Government Support
      The Vietnamese government has recognized the strategic importance of AI development and has implemented comprehensive policies to support the sector. This includes significant investments in research and development, as well as partnerships with leading international technology companies.

      ### Academic Excellence
      Vietnamese universities and research institutions are making remarkable progress in AI research. Institutions like Vietnam National University and Hanoi University of Science and Technology are producing cutting-edge research in machine learning, computer vision, and natural language processing.

      ### Industry Applications
      AI is being successfully implemented across various sectors including healthcare, finance, agriculture, and manufacturing. Vietnamese companies are developing innovative AI solutions that address local challenges while competing on a global scale.

      ## Key Breakthroughs

      ### Healthcare AI
      Vietnamese researchers have developed AI-powered diagnostic tools that can detect diseases at early stages with high accuracy. These tools are particularly valuable in rural areas where access to specialized medical expertise is limited.

      ### Financial Technology
      AI-driven fintech solutions are revolutionizing banking and financial services in Vietnam. From fraud detection to personalized financial advice, AI is enhancing the efficiency and security of financial transactions.

      ### Agricultural Innovation
      AI-powered precision agriculture systems are helping Vietnamese farmers optimize crop yields and reduce resource waste. These systems use satellite imagery, weather data, and soil analysis to provide actionable insights.

      ## Future Prospects

      ### Investment Opportunities
      The Vietnamese AI sector is attracting significant foreign investment, with major technology companies establishing research centers and development offices in the country.

      ### Talent Development
      Vietnam is developing a strong pipeline of AI talent through specialized education programs and industry partnerships. This is creating opportunities for both local and international companies.

      ### Global Collaboration
      Vietnamese AI researchers and companies are increasingly collaborating with international partners, contributing to the global advancement of AI technology.

      ## Challenges and Solutions

      ### Infrastructure Development
      While Vietnam has made significant progress, continued investment in digital infrastructure is essential for sustained AI growth.

      ### Regulatory Framework
      Developing comprehensive AI regulations that balance innovation with ethical considerations is crucial for long-term success.

      ### International Competition
      Vietnam must continue to invest in research and development to maintain its competitive position in the global AI market.

      The future of AI in Vietnam looks promising, with the country well-positioned to become a regional leader in artificial intelligence innovation and application.`,
      vi: `Lĩnh vực trí tuệ nhân tạo Việt Nam đang trải qua sự tăng trưởng chưa từng có, đánh dấu một cột mốc quan trọng trong sự phát triển công nghệ của đất nước. Với những đột phá và đổi mới mới xuất hiện trên nhiều ngành công nghiệp, Việt Nam đang định vị mình như một nhân tố quan trọng trong bối cảnh AI toàn cầu.

      ## Tình Trạng Hiện Tại Của AI Ở Việt Nam

      ### Hỗ Trợ Của Chính Phủ
      Chính phủ Việt Nam đã nhận ra tầm quan trọng chiến lược của việc phát triển AI và đã thực hiện các chính sách toàn diện để hỗ trợ lĩnh vực này. Điều này bao gồm các khoản đầu tư đáng kể vào nghiên cứu và phát triển, cũng như các quan hệ đối tác với các công ty công nghệ quốc tế hàng đầu.

      ### Xuất Sắc Học Thuật
      Các trường đại học và viện nghiên cứu Việt Nam đang đạt được tiến bộ đáng kể trong nghiên cứu AI. Các tổ chức như Đại học Quốc gia Việt Nam và Đại học Bách khoa Hà Nội đang sản xuất nghiên cứu tiên tiến về học máy, thị giác máy tính và xử lý ngôn ngữ tự nhiên.

      ### Ứng Dụng Công Nghiệp
      AI đang được triển khai thành công trên nhiều lĩnh vực bao gồm chăm sóc sức khỏe, tài chính, nông nghiệp và sản xuất. Các công ty Việt Nam đang phát triển các giải pháp AI sáng tạo giải quyết các thách thức địa phương trong khi cạnh tranh trên quy mô toàn cầu.

      ## Những Đột Phá Chính

      ### AI Chăm Sóc Sức Khỏe
      Các nhà nghiên cứu Việt Nam đã phát triển các công cụ chẩn đoán được hỗ trợ bởi AI có thể phát hiện bệnh ở giai đoạn đầu với độ chính xác cao. Những công cụ này đặc biệt có giá trị ở các vùng nông thôn nơi tiếp cận với chuyên môn y tế chuyên biệt bị hạn chế.

      ### Công Nghệ Tài Chính
      Các giải pháp fintech được hỗ trợ bởi AI đang cách mạng hóa ngân hàng và dịch vụ tài chính ở Việt Nam. Từ phát hiện gian lận đến tư vấn tài chính cá nhân hóa, AI đang nâng cao hiệu quả và bảo mật của các giao dịch tài chính.

      ### Đổi Mới Nông Nghiệp
      Các hệ thống nông nghiệp chính xác được hỗ trợ bởi AI đang giúp nông dân Việt Nam tối ưu hóa năng suất cây trồng và giảm lãng phí tài nguyên. Những hệ thống này sử dụng hình ảnh vệ tinh, dữ liệu thời tiết và phân tích đất để cung cấp thông tin có thể hành động.

      ## Triển Vọng Tương Lai

      ### Cơ Hội Đầu Tư
      Lĩnh vực AI Việt Nam đang thu hút đầu tư nước ngoài đáng kể, với các công ty công nghệ lớn thiết lập các trung tâm nghiên cứu và văn phòng phát triển ở đất nước.

      ### Phát Triển Nhân Tài
      Việt Nam đang phát triển một đường ống nhân tài AI mạnh mẽ thông qua các chương trình giáo dục chuyên biệt và quan hệ đối tác công nghiệp. Điều này đang tạo ra cơ hội cho cả công ty địa phương và quốc tế.

      ### Hợp Tác Toàn Cầu
      Các nhà nghiên cứu và công ty AI Việt Nam ngày càng hợp tác với các đối tác quốc tế, đóng góp vào sự tiến bộ toàn cầu của công nghệ AI.

      ## Thách Thức Và Giải Pháp

      ### Phát Triển Cơ Sở Hạ Tầng
      Trong khi Việt Nam đã đạt được tiến bộ đáng kể, việc đầu tư liên tục vào cơ sở hạ tầng kỹ thuật số là cần thiết cho sự tăng trưởng AI bền vững.

      ### Khung Pháp Lý
      Phát triển các quy định AI toàn diện cân bằng đổi mới với các cân nhắc đạo đức là rất quan trọng cho sự thành công lâu dài.

      ### Cạnh Tranh Quốc Tế
      Việt Nam phải tiếp tục đầu tư vào nghiên cứu và phát triển để duy trì vị trí cạnh tranh trong thị trường AI toàn cầu.

      Tương lai của AI ở Việt Nam trông đầy hứa hẹn, với đất nước được định vị tốt để trở thành nhà lãnh đạo khu vực trong đổi mới và ứng dụng trí tuệ nhân tạo.`
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "2024-01-20",
    author: "AI Research Team",
    tags: ["Artificial Intelligence", "Vietnam", "Technology", "Innovation", "Research"]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: { en: string; vi: string } } = {
      technology: { en: 'Technology', vi: 'Công Nghệ' },
      business: { en: 'Business', vi: 'Kinh Doanh' },
      security: { en: 'Security', vi: 'Bảo Mật' },
      industry: { en: 'Industry', vi: 'Ngành Nghề' }
    };
    return categoryMap[category] || { en: category, vi: category };
  };

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src={blogPost.image}
            alt={currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en}
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
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
                    },
                    path: '/news'
                  },
                  { 
                    name: currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative py-10 bg-white z-10 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/news')}
            className="flex items-center text-primary hover:text-primary-dark transition-colors mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {currentLanguage === 'vi' ? 'Quay lại Tin tức' : 'Back to News'}
          </motion.button>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentLanguage === 'vi' 
                  ? getCategoryLabel(blogPost.category).vi 
                  : getCategoryLabel(blogPost.category).en}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentLanguage === 'vi' ? blogPost.title.vi : blogPost.title.en}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <div className="flex items-center">
                <FiUser className="mr-2" />
                <span>{blogPost.author}</span>
              </div>
            </div>

            {/* Excerpt */}
            <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
              {currentLanguage === 'vi' ? blogPost.excerpt.vi : blogPost.excerpt.en}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <FiTag className="text-gray-500" />
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: (currentLanguage === 'vi' ? blogPost.content.vi : blogPost.content.en)
                  .split('\n\n')
                  .map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${paragraph.substring(3)}</h2>`;
                    } else if (paragraph.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">${paragraph.substring(4)}</h3>`;
                    } else if (paragraph.startsWith('- **')) {
                      return `<ul class="list-disc pl-6 space-y-2"><li>${paragraph.substring(2)}</li></ul>`;
                    } else if (paragraph.startsWith('**')) {
                      return `<p class="font-semibold text-gray-800">${paragraph}</p>`;
                    } else {
                      return `<p>${paragraph}</p>`;
                    }
                  })
                  .join('')
              }}
            />
          </motion.div>

          {/* Share and Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">
                  {currentLanguage === 'vi' ? 'Chia sẻ:' : 'Share:'}
                </span>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/news')}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                {currentLanguage === 'vi' ? 'Xem tất cả tin tức' : 'View All News'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 -ml-36 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Blog; 