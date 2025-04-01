import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCheck } from 'react-icons/fi';

const VideoSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 backdrop-blur-sm"></div>
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary/10 rounded-full filter blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See How We Transform IT Challenges
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Watch how NetCorp delivers innovative technology solutions that drive business success for our clients across Vietnam.
          </p>
        </motion.div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <img 
              src="https://source.unsplash.com/random/1200x800/?technology,business" 
              alt="NetCorp Technology Solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-20 h-20 flex items-center justify-center bg-primary rounded-full text-white shadow-lg hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <FiPlay size={30} className="group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-0 w-full md:w-2/5 h-full md:bg-gradient-to-l from-primary/90 to-primary/80 flex flex-col justify-center p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technology Solutions that Drive Business Growth
            </h3>
            
            <div className="mb-8">
              <ul className="space-y-3">
                {[
                  'Custom software development',
                  'IT infrastructure optimization',
                  'Cybersecurity solutions',
                  'Cloud transformation'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <FiCheck className="mr-2 text-white/80" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.a 
              href="/services" 
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors max-w-max"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div 
              className="aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="NetCorp Technology Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection; 