import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Company {
  id: number;
  name: string;
  category: string;
  description: {
    en: string;
    vi: string;
  };
  image: string;
}

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample company data - replace with your actual company data
  const companies: Company[] = [
    // Enterprise Companies (7)
  {
    id: 1,
      name: "Tech Solutions Corp",
      category: "enterprise",
      description: {
        en: "Leading enterprise technology solutions provider",
        vi: "Nhà cung cấp giải pháp công nghệ doanh nghiệp hàng đầu"
      },
      image: "https://source.unsplash.com/random/800x600?business&1"
  },
  {
    id: 2,
      name: "Digital Innovations Ltd",
      category: "enterprise",
      description: {
        en: "Digital transformation and IT infrastructure",
        vi: "Chuyển đổi số và cơ sở hạ tầng CNTT"
      },
      image: "https://source.unsplash.com/random/800x600?technology&2"
  },
  {
    id: 3,
      name: "Smart Systems Co",
      category: "enterprise",
      description: {
        en: "Intelligent automation solutions",
        vi: "Giải pháp tự động hóa thông minh"
      },
      image: "https://source.unsplash.com/random/800x600?automation&3"
  },
  {
    id: 4,
      name: "Future Tech Inc",
      category: "enterprise",
      description: {
        en: "Next-generation enterprise solutions",
        vi: "Giải pháp doanh nghiệp thế hệ mới"
      },
      image: "https://source.unsplash.com/random/800x600?future&4"
  },
  {
    id: 5,
      name: "Data Systems Corp",
      category: "enterprise",
      description: {
        en: "Enterprise data management solutions",
        vi: "Giải pháp quản lý dữ liệu doanh nghiệp"
      },
      image: "https://source.unsplash.com/random/800x600?data&5"
  },
  {
    id: 6,
      name: "Cloud Solutions Ltd",
      category: "enterprise",
      description: {
        en: "Enterprise cloud infrastructure",
        vi: "Cơ sở hạ tầng đám mây doanh nghiệp"
      },
      image: "https://source.unsplash.com/random/800x600?cloud&6"
    },
    {
      id: 7,
      name: "Network Systems Co",
      category: "enterprise",
      description: {
        en: "Enterprise networking solutions",
        vi: "Giải pháp mạng doanh nghiệp"
      },
      image: "https://source.unsplash.com/random/800x600?network&7"
    },

    // Banking Companies (7)
    {
      id: 8,
      name: "VietBank Corp",
      category: "bank",
      description: {
        en: "Digital banking transformation",
        vi: "Chuyển đổi số ngân hàng"
      },
      image: "https://source.unsplash.com/random/800x600?bank&8"
    },
    {
      id: 9,
      name: "Finance Solutions",
      category: "bank",
      description: {
        en: "Financial technology solutions",
        vi: "Giải pháp công nghệ tài chính"
      },
      image: "https://source.unsplash.com/random/800x600?finance&9"
    },
    {
      id: 10,
      name: "Digital Banking Co",
      category: "bank",
      description: {
        en: "Modern banking infrastructure",
        vi: "Cơ sở hạ tầng ngân hàng hiện đại"
      },
      image: "https://source.unsplash.com/random/800x600?banking&10"
    },
    {
      id: 11,
      name: "Payment Tech Ltd",
      category: "bank",
      description: {
        en: "Payment processing solutions",
        vi: "Giải pháp xử lý thanh toán"
      },
      image: "https://source.unsplash.com/random/800x600?payment&11"
    },
    {
      id: 12,
      name: "Secure Banking Systems",
      category: "bank",
      description: {
        en: "Secure banking infrastructure",
        vi: "Cơ sở hạ tầng ngân hàng an toàn"
      },
      image: "https://source.unsplash.com/random/800x600?security&12"
    },
    {
      id: 13,
      name: "FinTech Solutions",
      category: "bank",
      description: {
        en: "Financial technology innovation",
        vi: "Đổi mới công nghệ tài chính"
      },
      image: "https://source.unsplash.com/random/800x600?fintech&13"
    },
    {
      id: 14,
      name: "Banking Tech Corp",
      category: "bank",
      description: {
        en: "Banking technology solutions",
        vi: "Giải pháp công nghệ ngân hàng"
      },
      image: "https://source.unsplash.com/random/800x600?banking&14"
    },

    // Government Agencies (3)
    {
      id: 15,
      name: "Government Digital Agency",
      category: "government",
      description: {
        en: "National digital transformation initiative",
        vi: "Sáng kiến chuyển đổi số quốc gia"
      },
      image: "https://source.unsplash.com/random/800x600?government&15"
    },
    {
      id: 16,
      name: "Public Services Tech",
      category: "government",
      description: {
        en: "Public service digitalization",
        vi: "Số hóa dịch vụ công"
      },
      image: "https://source.unsplash.com/random/800x600?public&16"
    },
    {
      id: 17,
      name: "Smart City Solutions",
      category: "government",
      description: {
        en: "Smart city infrastructure",
        vi: "Cơ sở hạ tầng thành phố thông minh"
      },
      image: "https://source.unsplash.com/random/800x600?city&17"
    },

    // Foreign Companies (5)
    {
      id: 18,
      name: "Global Tech Solutions",
      category: "foreign",
      description: {
        en: "International technology services",
        vi: "Dịch vụ công nghệ quốc tế"
      },
      image: "https://source.unsplash.com/random/800x600?global&18"
    },
    {
      id: 19,
      name: "Worldwide Systems Inc",
      category: "foreign",
      description: {
        en: "Global IT infrastructure",
        vi: "Cơ sở hạ tầng CNTT toàn cầu"
      },
      image: "https://source.unsplash.com/random/800x600?worldwide&19"
    },
    {
      id: 20,
      name: "International Data Corp",
      category: "foreign",
      description: {
        en: "International data solutions",
        vi: "Giải pháp dữ liệu quốc tế"
      },
      image: "https://source.unsplash.com/random/800x600?international&20"
    },
    {
      id: 21,
      name: "Global Network Ltd",
      category: "foreign",
      description: {
        en: "Global networking solutions",
        vi: "Giải pháp mạng toàn cầu"
      },
      image: "https://source.unsplash.com/random/800x600?network&21"
    },
    {
      id: 22,
      name: "Multinational Tech Co",
      category: "foreign",
      description: {
        en: "Multinational technology services",
        vi: "Dịch vụ công nghệ đa quốc gia"
      },
      image: "https://source.unsplash.com/random/800x600?multinational&22"
    }
  ];

  const categories = [
    { id: 'all', label: currentLanguage === 'vi' ? 'TẤT CẢ' : 'ALL', count: companies.length },
    { id: 'enterprise', label: currentLanguage === 'vi' ? 'DOANH NGHIỆP' : 'ENTERPRISE', count: 7 },
    { id: 'bank', label: currentLanguage === 'vi' ? 'NGÂN HÀNG' : 'BANKING', count: 7 },
    { id: 'government', label: currentLanguage === 'vi' ? 'CHÍNH PHỦ' : 'GOVERNMENT', count: 3 },
    { id: 'foreign', label: currentLanguage === 'vi' ? 'NƯỚC NGOÀI' : 'FOREIGN', count: 5 }
  ];

  const filteredCompanies = activeCategory === 'all' 
    ? companies 
    : companies.filter(company => company.category === activeCategory);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[40vh] mt-0 w-full">
        <div className="fixed top-0 left-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Portfolio Hero Background"
            className="w-screen h-screen object-cover fixed"
          />
          <div className="fixed inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mt-16">
            <h1 className="text-4xl md:text-6xl font-bold">
              {currentLanguage === 'vi' ? 'KHÁCH HÀNG' : 'PORTFOLIO'}
            </h1>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="relative bg-white z-10 py-20 mt-16">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
          {categories.map((category) => (
              <button
              key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {category.label}
                {category.count && (
                  <span className="ml-1 text-xs">({category.count})</span>
                )}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  />
                )}
              </button>
          ))}
        </div>
        
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {filteredCompanies.map((company) => (
        <motion.div 
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold">{company.name}</h3>
                      <p className="mt-2 text-sm">{currentLanguage === 'vi' ? company.description.vi : company.description.en}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diagonal Shape */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 -mb-48 -mr-48 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default Portfolio; 