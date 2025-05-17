import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            border: '4px solid #2563eb',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ fontSize: '18px', color: '#1e293b' }}>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Articles />
        <Education />
<Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
