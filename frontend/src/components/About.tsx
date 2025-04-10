import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type TabType = 'humanResource' | 'visionMission' | 'coreValues';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('humanResource');

  const heroContent = {
    title: {
      en: "ABOUT US ",
      vi: "VỀ CHÚNG TÔI"
    }
  };

  const tabContent = {
    humanResource: {
      en: "We are proud of our staffs, technology experts with experience accrued from hundreds of projects in nearly 17 years, many large customers have appreciated for our competence and professional qualifications. Our experts always try the best with the mission bringing Best Products – Best Solutions – Best service as customer demand currently and in the future. We accompany closely with customers in building technology-oriented strategy, developing product, service and commitment to optimization more value for customer. Besides, with the expanding of business scope, we have been building the system of recruitment and professional training to meet the needs of Group as well as customers.",
      vi: "Chúng tôi luôn tự hào với đội ngũ nhân viên, chuyên gia công nghệ với kinh nghiệm tích luỹ từ hàng trăm dự án trong gần 17 năm qua, được nhiều khách hàng lớn đánh giá cao về năng lựcvà trình độ chuyên môn. Các chuyên gia công nghệ hàng đầu của NetCorp Corporation luôn nỗ lực mang đến Sản phẩm – Giải pháp – Dịch vụ tốt nhất theo nhu cầu khách hàng, đáp ứng các yêu cầu hiện tại và trong tương lai.\n\nChúng tôi luôn sát cánh, đồng hành cùng khách hàng trong việc xây dựng định hướng chiến lược công nghệ, phát triển sản phẩm, dịch vụ và cam kết, gia tăng giá trị tối ưu cho khách hàng. Bên cạnh đó, với quy mô doanh nghiệp và lĩnh vực kinh doanh ngày càng mở rộng, chúng tôi đã đang xây dựng hệ thống tuyển dụng và đào tạo bài bản chuyên nghiệp, đáp ứng nhu cầu của doanh nghiệp cũng như khách hàng.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    visionMission: {
      en: "Netcorp Corporation's vision is to become one of the leading solution supplier of ICT, Electronics, Industrial sector in Vietnam. We have been creating our own values by building a network among customers, partners and manufacturers as well as enhancing capabilities and seting higher and higher goals to achieve and satisfy customer.",
      vi: "Netcorp Corporation hướng tới trở thành một trong những nhà cung cấp giải pháp hàng đầu trong lĩnh vực Công nghệ thông tin, Điện tử, Công nghiệp tại Việt Nam. Chúng tôi đã và đang tạo nên những giá trị riêng bằng cách xây dựng mạng lưới kết nối giữa khách hàng, đối tác và nhà sản xuất, cũng như không ngừng nâng cao năng lực và đặt ra những mục tiêu cao hơn nhằm làm hài lòng khách hàng và khẳng định giá trị doanh nghiệp.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    coreValues: {
      en: "<strong>SERVE</strong> each customer like the only customer we have. Our customer-centric focus drives us to create innovative solutions that directly address customer needs.\n\n<strong>RECOGNIZE</strong> our people like our most valuable asset. We work with each other to enable development, by adopting a strong ethos of sharing experiences, team working, regular communications and consultation.\n\n<strong>PROVIDE</strong> an environment of integrity and honesty. We are open and fair in our approach in order to establish clear, professional and sustainable working relationships.\n\n<strong>KAIZEN</strong>, also known as continuous improvement is our survival motto. We constantly strive to do better, setting the high standard for ourselves and each other.",
      vi: "<strong>CHĂM SÓC</strong> từng khách hàng như khách hàng duy nhất chúng tôi có được. Với phương châm khách hàng là trung tâm, chúng tôi tạo ra các giải pháp sáng tạo, hiệu quả đáp ứng nhu cầu của khách hàng.\n\n<strong>NHÌN NHẬN</strong> nhân sự như tài sản quý giá nhất chúng tôi có. Chúng tôi kết hợp, hỗ trợ nhau nhằm thúc đẩy nhau cùng phát triển, bằng cách chia sẻ kinh nghiệm, làm việc nhóm, trao đổi và tư vấn thường xuyên.\n\n<strong>CUNG CẤP</strong> một môi trường hiện đại và trung thực. Chúng tôi sẵn sàng chia sẻ và luôn minh bạch, hướng tới việc thiết lập mối quan hệ đồng nghiệp bền vững và chuyên nghiệp.\n\n<strong>CẢI TIẾN</strong> không ngừng nghỉ là phương châm sống còn của chúng tôi. Chúng tôi phấn đấu và nỗ lực không ngừng, luôn đặt ra những mục tiêu cao hơn cho doanh nghiệp và cho từng cá nhân.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  };

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const getHumanResourceText = () => {
    return currentLanguage === 'vi' ? tabContent.humanResource.vi : tabContent.humanResource.en;
  };

  const getVisionMissionText = () => {
    return currentLanguage === 'vi' ? tabContent.visionMission.vi : tabContent.visionMission.en;
  };

  const getCoreValuesText = () => {
    return currentLanguage === 'vi' ? tabContent.coreValues.vi : tabContent.coreValues.en;
  };

  const getActiveTabImage = () => {
    return tabContent[activeTab].image;
  };

  return (
    <section id="about">
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="About Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {currentLanguage === 'vi' ? heroContent.title.vi : heroContent.title.en}
          </h1>
          <p className="text-lg uppercase tracking-wider">
            {currentLanguage === 'vi' ? heroContent.breadcrumb.vi : heroContent.breadcrumb.en}
          </p>
        </div>
      </div>

      {/* NetCorp Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-primary/20 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  alt="Team Meeting"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentLanguage === 'vi' ? (
                  <>CÔNG TY CỔ PHẦN <span className="text-primary">NETCORP</span></>
                ) : (
                  <>NETCORP <span className="text-primary">CORPORATION</span></>
                )}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {currentLanguage === 'vi' ? (
                  <>bao gồm 2 công ty Netcorp và iERP.</>
                ) : (
                  <>includes 2 companies Netsys and iERP.</>
                )}
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    <span className="text-primary">•</span> NETCORP
                  </h3>
                  <p className="text-gray-600">
                    {currentLanguage === 'vi' 
                      ? "Thành lập năm 2005, NETCORP cung cấp dịch vụ tổng thể, từ triển khai trung tâm dữ liệu, máy chủ, hệ thống mạng, tổng đài, hệ thống bảo mật, hệ thống điện, ảo hoá, dịch vụ quản lý và bảo hành, bảo trì... Tới nay, NETCORP đã có những thành tựu đáng kể trong ngành công nghệ thông tin, góp phần trong sự phát triển chung của ngành."
                      : "Established in 2005, NETCORP provides total services, from deploying data centers, servers, network systems, switchboards, security systems, power systems, virtualization, management services and warranty, maintenance... Up to now, NETCORP has made remarkable achievements in the information technology industry, contributing to the overall development of the industry."}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    <span className="text-primary">•</span> IERP
                  </h3>
                  <p className="text-gray-600">
                    {currentLanguage === 'vi'
                      ? "Năm 2013, IERP ra đời, tập trung vào các giải pháp tổng thể quản trị (ERP - Enterprise Resource Planning) và BI (Business Intelligence) cho các doanh nghiệp và các tổ chức. Đặc biệt, IERP là chuyên gia về tư vấn giải pháp, giám sát và triển khai các ứng dụng quản trị cho các doanh nghiệp và các tổ chức sử dụng công nghệ nền tảng của hãng Oracle."
                      : "In 2013, IERP was born, focusing on total management solutions (ERP - Enterprise Resource Planning) and BI (Business Intelligence) for businesses and organizations. In particular, IERP is an expert in consulting solutions, monitoring and deploying administrative applications for businesses and organizations using Oracle's platform technology."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <div className="flex space-x-2 md:space-x-4 lg:space-x-8 mb-8">
                <div className="h-12 flex items-end">
                  <button 
                    className={`px-2 md:px-6 lg:px-10 py-3 border-b-2 transition-all uppercase font-bold text-sm md:text-base ${
                      activeTab === 'humanResource' 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-transparent hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setActiveTab('humanResource')}
                  >
                    {currentLanguage === 'vi' ? 'NGUỒN NHÂN LỰC' : 'HUMAN RESOURCE'}
                  </button>
                </div>
                <div className="h-12 flex items-end">
                  <button 
                    className={`px-2 md:px-6 lg:px-10 py-3 border-b-2 transition-all uppercase font-bold text-sm md:text-base ${
                      activeTab === 'visionMission' 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-transparent hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setActiveTab('visionMission')}
                  >
                    {currentLanguage === 'vi' ? 'TẦM NHÌN & SỨ MỆNH' : 'VISION &\nMISSION'}
                  </button>
                </div>
                <div className="h-12 flex items-end">
                  <button 
                    className={`px-2 md:px-6 lg:px-10 py-3 border-b-2 transition-all uppercase font-bold text-sm md:text-base ${
                      activeTab === 'coreValues' 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-transparent hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setActiveTab('coreValues')}
                  >
                    {currentLanguage === 'vi' ? 'GIÁ TRỊ CỐT LÕI' : 'CORE VALUES'}
                  </button>
                </div>
              </div>

              <div className="h-[300px] overflow-y-auto">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p 
                    className="text-gray-700 font-medium mb-6 text-lg leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: activeTab === 'humanResource' 
                        ? getHumanResourceText() 
                        : activeTab === 'visionMission'
                          ? getVisionMissionText()
                          : getCoreValuesText()
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center items-end">
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-end pr-0 lg:pr-0"
              >
                <div className="rounded-full overflow-hidden h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shadow-xl">
                  <img
                    src={getActiveTabImage()}
                    alt={`${activeTab} illustration`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 