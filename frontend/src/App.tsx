import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Partners from './components/Partners';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import Contact from './screens/Contact';
import IctServicePage from './screens/IctServicePage';
import BroadcastingServicePage from './screens/BroadcastingServicePage';
import BusinessApplicationServicePage from './screens/BusinessApplicationServicePage';
import MeServicePage from './screens/MeServicePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get the language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-light relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="pt-20">
              <Hero />
              <Services />
              <About />
              <VideoSection />
              <Clients />
            </div>
          } />
          <Route path="/home" element={
            <div className="pt-20">
              <Hero />
              <Services />
              <About />
              <VideoSection />
              <Clients />
            </div>
          } />
          <Route path="/about" element={
            <div className="pt-20">
              <About />
            </div>
          } />
          <Route path="/about/home" element={<Navigate to="/" replace />} />
          <Route path="/services" element={
            <div className="pt-20">
              <Services />
            </div>
          } />
          <Route path="/client" element={
            <div className="pt-20">
              <Clients />
            </div>
          } />
          <Route path="/partners" element={
            <div className="pt-20">
              <Partners />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/ict" element={<IctServicePage />} />
          <Route path="/services/broadcasting" element={<BroadcastingServicePage />} />
          <Route path="/services/business-application" element={<BusinessApplicationServicePage />} />
          <Route path="/services/me" element={<MeServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
