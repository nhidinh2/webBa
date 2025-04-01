import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.projects'), path: '/projects' },
    { name: t('navbar.news'), path: '/news' },
    { name: t('navbar.contact'), path: '/contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-darker py-4 shadow-lg' : 'bg-darker py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl flex items-center">
              <div className="mr-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#10B981"/>
                  <path d="M13 20L18 25L28 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">Net<span className="text-primary">Corp</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`nav-link px-5 py-3 font-medium transition-all duration-300 relative group ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary w-full" 
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-5">
            <LanguageSwitcher />
            <button className="text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-800">
              <FiSearch size={20} />
            </button>
            <Link 
              to="/contact" 
              className="btn bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md flex items-center"
            >
              <FiUser className="mr-2" /> {t('navbar.clientPortal')}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 flex flex-col items-end justify-center space-y-1.5">
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 transform -rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 transform rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-darker py-4 border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-3 font-medium rounded-md flex justify-between items-center ${
                    isActive(item.path) 
                      ? 'text-primary bg-gray-800/50' 
                      : 'text-white hover:text-primary hover:bg-gray-800/30'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  )}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-800 flex justify-between items-center">
                <LanguageSwitcher />
                <Link 
                  to="/contact" 
                  className="btn bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiUser className="mr-2" /> {t('navbar.clientPortal')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar; 