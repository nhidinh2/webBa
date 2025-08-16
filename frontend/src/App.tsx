import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import IctServicePage from './components/pages/IctServicePage';
import MeServicePage from './components/pages/MeServicePage';
import BusinessApplicationServicePage from './components/pages/BusinessApplicationServicePage';
import BroadcastingServicePage from './components/pages/BroadcastingServicePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services/ict" element={<IctServicePage />} />
        <Route path="/services/me" element={<MeServicePage />} />
        <Route path="/services/business-application" element={<BusinessApplicationServicePage />} />
        <Route path="/services/broadcasting" element={<BroadcastingServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
