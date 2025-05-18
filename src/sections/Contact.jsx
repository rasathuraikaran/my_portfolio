import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaStackOverflow, FaInstagram, FaFacebook, FaCoffee } from 'react-icons/fa';
import { SiMedium, SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailToLink = `mailto:rasathuraikaran26@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailToLink;
    
    setSubmitStatus({
      success: true,
      message: 'Your email client is opening...'
    });
    
    // Clear form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus({ success: null, message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'rasathuraikaran26@gmail.com',
      href: 'mailto:rasathuraikaran26@gmail.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+94 76 767 2709',
      href: 'tel:+94767672709'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Jaffna, Sri Lanka',
      href: 'https://www.google.com/maps/place/Jaffna',
      target: '_blank'
    }
  ];

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
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/karan_s_r_/',
      label: 'Instagram',
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/rasathurai.karan.1/',
      label: 'Facebook',
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      url: 'https://leetcode.com/u/rasathuraikaran26/',
      label: 'LeetCode',
    },
    {
      icon: <FaCoffee className="w-5 h-5" />,
      url: 'https://buymeacoffee.com/rasathuraikaran',
      label: 'Buy Me a Coffee',
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: 'mailto:rasathuraikaran26@gmail.com',
      label: 'Email',
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">{item.title}</h4>
                    <a 
                      href={item.href} 
                      target={item.target || '_self'} 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
