import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Portfolio';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import TranslationManager from './components/TranslationManager';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-light relative">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <VideoSection />
              <Projects />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        <Footer />
        <TranslationManager />
      </div>
    </Router>
  );
}

export default App;
