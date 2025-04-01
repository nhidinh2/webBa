import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiSend, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full translate-x-1/2 translate-y-1/3"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated with NetCorp</h3>
                <p className="text-gray-600">Get the latest news, articles and resources sent to your inbox</p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 min-w-[250px] px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-r-md transition-colors duration-300 flex items-center justify-center">
                    <FiSend className="mr-2" />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-white font-bold text-3xl flex items-center mb-6">
                <div className="mr-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#10B981"/>
                    <path d="M13 20L18 25L28 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                NetCorp
              </Link>
              <p className="text-gray-400 mb-6">
                Leading IT solutions provider in Vietnam, delivering innovative technology services to help businesses transform and succeed in the digital era.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiFacebook />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <FiLinkedin />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Our Services
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center">
                    <FiArrowRight className="mr-2 text-sm text-primary" />
                    Digital Transformation
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMapPin className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">123 Tech Street, District 1, Ho Chi Minh City, Vietnam</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiPhone className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">+84 (28) 1234-5678</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FiMail className="text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">info@netcorp.vn</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} NetCorp. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 