import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import AchievementDetails from './components/AchievementDetails';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import { achievements } from './sections/Achievements';
import Achievements from './sections/Achievements';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Loading from './components/Loading';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <Navbar />
      <Loading>
        <Routes>
          <Route path="/" element={
            <main className=" w-full">
               <Hero />
               <About />
               <Experience />
               <Articles />
               <Education />
               <Gallery />
               <Projects />
               <Achievements />
               <Skills />
              <Certifications />
      
           
              <Contact />
             
            </main>
          } />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/achievements/:id" element={
            <AchievementDetails achievement={achievements[parseInt(useParams().id) - 1]} />
          } />
        </Routes>
      </Loading>
      <Footer />
    </div>
  );
}

export default App;
