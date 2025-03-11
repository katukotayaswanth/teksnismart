import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageLayout>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;