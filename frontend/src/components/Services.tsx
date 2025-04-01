import React from 'react';
import { FiServer, FiShield, FiCode, FiGlobe, FiDatabase, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  delay: number;
  highlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, number, title, description, delay, highlighted = false }) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-lg bg-white shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300 p-6 h-full hover:shadow-xl`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col h-full">
        <div className={`w-16 h-16 rounded-lg mb-6 p-3.5 flex items-center justify-center ${highlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} transition-colors duration-300 group-hover:bg-primary group-hover:text-white`}>
          <div className="text-2xl">{icon}</div>
        </div>
        <div className="text-7xl font-bold opacity-5 absolute right-4 bottom-4">{number}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="h-0.5 w-12 bg-primary mb-4 transition-all duration-300 group-hover:w-20"></div>
        <p className="text-gray-600 mt-auto mb-6 leading-relaxed">
          {description}
        </p>
        <a href="#" className="mt-auto inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform duration-300">
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FiServer />,
      number: "01",
      title: "IT Infrastructure",
      description: "Build and maintain reliable IT systems with our comprehensive infrastructure solutions.",
      delay: 0.1
    },
    {
      icon: <FiShield />,
      number: "02",
      title: "Cyber Security",
      description: "Protect your business from threats with advanced cybersecurity strategies and tools.",
      delay: 0.2
    },
    {
      icon: <FiCode />,
      number: "03",
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business requirements.",
      delay: 0.3,
      highlighted: true
    },
    {
      icon: <FiGlobe />,
      number: "04",
      title: "Web Development",
      description: "Create engaging, responsive websites that represent your brand effectively.",
      delay: 0.4
    },
    {
      icon: <FiDatabase />,
      number: "05",
      title: "Data Solutions",
      description: "Harness the power of your data with our advanced analytics and management services.",
      delay: 0.5
    },
    {
      icon: <FiBriefcase />,
      number: "06",
      title: "IT Consulting",
      description: "Strategic guidance to help you leverage technology for business growth.",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute top-20 -left-20 w-80 h-80 bg-primary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technology Solutions for Your Business Growth
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Comprehensive IT solutions designed to help Vietnamese businesses thrive in the digital economy with cutting-edge technology and expert support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon} 
              number={service.number} 
              title={service.title} 
              description={service.description}
              delay={service.delay} 
              highlighted={service.highlighted}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-primary/10 rounded-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full -ml-10 -mb-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to transform your business?</h3>
              <p className="text-gray-700">Get a customized solution designed specifically for your needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors inline-flex items-center justify-center">
                Request a Consultation
              </a>
              <a href="#" className="btn bg-white text-dark border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                View All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 