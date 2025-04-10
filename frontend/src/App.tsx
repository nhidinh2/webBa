import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

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
      <div className="min-h-screen bg-light relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="pt-20">
              <Hero />
              <Services />
              <About />
              <VideoSection />
              <Portfolio />
            </div>
          } />
          <Route path="/home" element={
            <div className="pt-20">
              <Hero />
              <Services />
              <About />
              <VideoSection />
              <Portfolio />
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
              <Portfolio />
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
