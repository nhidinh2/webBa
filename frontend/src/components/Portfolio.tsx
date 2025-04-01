import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', name: 'ALL PROJECTS', count: 6 },
  { id: 'infrastructure', name: 'INFRASTRUCTURE' },
  { id: 'software', name: 'SOFTWARE' },
  { id: 'cybersecurity', name: 'SECURITY' },
  { id: 'cloud', name: 'CLOUD' },
];

const projectItems = [
  {
    id: 1,
    title: 'Enterprise Network Infrastructure',
    category: 'infrastructure',
    image: 'https://source.unsplash.com/random/600x600/?network,server',
    client: 'Financial Institution',
  },
  {
    id: 2,
    title: 'Custom ERP Solution',
    category: 'software',
    image: 'https://source.unsplash.com/random/600x600/?coding,software',
    client: 'Manufacturing Company',
  },
  {
    id: 3,
    title: 'Data Security Implementation',
    category: 'cybersecurity',
    image: 'https://source.unsplash.com/random/600x600/?security,cyber',
    client: 'Government Agency',
  },
  {
    id: 4,
    title: 'Cloud Migration Project',
    category: 'cloud',
    image: 'https://source.unsplash.com/random/600x600/?cloud,computing',
    client: 'Retail Chain',
  },
  {
    id: 5,
    title: 'Network Security Audit',
    category: 'cybersecurity',
    image: 'https://source.unsplash.com/random/600x600/?security,network',
    client: 'Healthcare Provider',
  },
  {
    id: 6,
    title: 'Enterprise Cloud Storage',
    category: 'cloud',
    image: 'https://source.unsplash.com/random/600x600/?storage,data',
    client: 'Logistics Company',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all' 
    ? projectItems 
    : projectItems.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary opacity-5 rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recent Success Stories
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore our latest projects and discover how we've helped businesses across Vietnam overcome their technology challenges and achieve digital transformation.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-5 py-2 mx-2 mb-4 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              {category.count && <span className="ml-1 text-xs">{`(${category.count})`}</span>}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Client: {item.client}</p>
                  <div className="flex justify-between items-center">
                    <div className="h-0.5 w-12 bg-primary/50 transition-all duration-300 group-hover:w-20"></div>
                    <a href={`#project-${item.id}`} className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-0 -translate-x-4">
                      View Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.a 
            href="/all-projects"
            className="btn inline-flex items-center bg-white text-dark border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 