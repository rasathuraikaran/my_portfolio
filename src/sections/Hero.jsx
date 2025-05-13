import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import profileImage from '../assets/karan.jpeg';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com/rasathuraikaran',
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/karan1999',
      label: 'LinkedIn',
    },
    {
      icon: <FaStackOverflow className="w-5 h-5" />,
      url: 'https://stackoverflow.com/users/14732792/rasathurai-karan',
      label: 'Stack Overflow',
    },
    {
      icon: <SiMedium className="w-5 h-5" />,
      url: 'https://rasathuraikaran26.medium.com/',
      label: 'Medium',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_600px_at_60%_300px,#3b82f6,transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-100 shadow-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">My portfolio</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Karan Rasathurai</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
              Software Engineer
            </h2>
            
            <p className="text-gray-500 text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              I design and build exceptional digital experiences. Specializing in modern web applications, 
              scalable backend systems, and clean, efficient code that delivers real business value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3.5 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow"
              >
                <FiDownload className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
              <img
                src={profileImage}
                alt="Karan Rasathurai Profile"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
