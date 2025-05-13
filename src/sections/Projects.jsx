import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.jpeg';

const projects = [
  {
    id: 1,
    title: 'Road Accident Detection And Notification System',
    description: 'Contributed to the development of the mobile application by integrating authentication with QR code, Google Maps API, and real-time accident alerts. Additionally, implemented automatic emergency calls and user profile management to enhance user safety and personalization.',
    technologies: ['AWS', 'IoT', 'Flutter', 'Firebase', 'Flask'],
    github: 'https://github.com/cepdnaclk/e18-3yp-Road-Traffic-Ecosystem/tree/FlutterApp',
    demo: 'https://cepdnaclk.github.io/e18-3yp-Road-Traffic-Ecosystem/',
    youtube: 'https://youtu.be/B0Id5g_FR_Q',
    image: project1
  },
  {
    id: 2,
    title: 'Digital Twin For Smart Green House',
    description: 'Developed a smart greenhouse’s digital twin, utilizing pandas DataFrame, data visualization, regression models, supervised learning, preprocessing techniques, multi-threading, and concurrency.',
    technologies: ['Supervised Learning', '3D Modelling', 'Multithreading'],
    github: 'https://github.com/cepdnaclk/e18-6sp-Digital-Twin',
    demo: 'https://cepdnaclk.github.io/e18-6sp-Digital-Twin/',
    image: project2
  },
  {
    id: 3,
    title: 'Cake Order App',
    description: 'Developed an individual mobile app project aimed at encouraging indoor cake makers to sell their cakes. The app provides a convenient way for customers to purchase cakes from indoor cake makers. App was deployed in the Play Store.',
    technologies: ['Flutter', 'Firebase'],
    github: 'https://github.com/rasathuraikaran/CakeOrderApp',
    demo: 'https://play.google.com/store/apps/details?id=com.academind.CakeDA',
    image: project3
  },
  {
    id: 4,
    title: 'Smart Inventory Management',
    description: 'Contributed to the development of the components page, email sending system, and management of multiple roles, permissions, and dashboard.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'Bootstrap', 'CSS'],
    github: 'https://github.com/cepdnaclk/e18-co227-Smart-Inventory-Management-System-Group-C',
    demo: 'https://cepdnaclk.github.io/e18-co227-Smart-Inventory-Management-System-Group-C/',
    image: project4
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <FiGithub className="mr-1" /> Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was built to solve a specific problem and improve my skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
