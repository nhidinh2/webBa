import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      
      {/* Geometric shapes */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary opacity-10 rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-primary rotate-45"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-secondary rotate-45"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-primary rotate-45"></div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8" data-aos="fade-right">
            <div className="mb-6 inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {t('hero.tagline')}
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.title')} <span className="relative z-10">
                Innovative
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-10"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a 
                href="#contact"
                className="btn bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.getStarted')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="#services"
                className="btn bg-white text-dark border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.exploreServices')}
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/random/100x100/?face&${i}`} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">{t('hero.trustedBy')}</div>
                <div className="text-xs text-gray-600">{t('hero.companies')}</div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 relative" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 -m-6 bg-primary/10 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 -m-6 border border-primary/30 rounded-lg transform -rotate-3"></div>
              
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img 
                  src="https://source.unsplash.com/random/800x600/?technology,office" 
                  alt="NetCorp Office" 
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="mb-3 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Live Projects</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-white font-bold text-xl">1500+ {t('hero.projects')}</div>
                      <motion.div 
                        className="rounded-full bg-primary p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">IT Solutions</div>
                    <div className="text-sm text-gray-600">End-to-End Services</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Certified Partner</div>
                    <div className="text-sm text-gray-600">Since 2008</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-center"
        >
          <div className="text-sm text-gray-600 mb-2">Scroll to discover</div>
          <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 