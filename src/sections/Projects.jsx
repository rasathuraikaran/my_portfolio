import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';

export const projects = [
 

  {
    id: 1,
    title: 'Road Accident Detection And Notification System',
    description: 'Contributed to the development of the mobile application by integrating authentication with QR code, Google Maps API, and real-time accident alerts. Additionally, implemented automatic emergency calls and user profile management to enhance user safety and personalization.This is a system which helps to save their lifes before, and after accidents happen. This system alerts the user about upcoming traffic signs which helps the driver to drive carefully following rules. After the accident happens, this system alerts the emergency contacts about the accident. Apart from these features this system acts as a community of drivers which can help other drivers in need in emergency times. Mobile application notifies the nearest accidents to the users to help the users who have met accident. In the application, users will be registered using firebase authentication. During the authentication, user’s data including emergency contacts is taken during this time. A user can register to our platform by scanning QR code. Then that device will be registered to particular user. Sensor readings, and predictions are shared with cloud, and data will be stored in firestore. Cloud queries firestore. If an accident is detected, emergency contacts will be notified by the cloud function.',
    technologies: ['AWS', 'IoT', 'Flutter', 'Firebase', 'Flask'],
    github: 'https://github.com/cepdnaclk/e18-3yp-Road-Traffic-Ecosystem/tree/FlutterApp',
    demo: 'https://cepdnaclk.github.io/e18-3yp-Road-Traffic-Ecosystem/',
    youtube: 'https://youtu.be/B0Id5g_FR_Q',
    image: project1
  },
  {
    id: 2,
    title: 'Digital Twin For Smart Green House',
    description: 'Developed a smart greenhouse’s digital twin, utilizing pandas DataFrame, data visualization, regression models, supervised learning, preprocessing techniques, multi-threading, and concurrency.This project aims to automate greenhouse management using Machine Learning and IoT. It collects environmental data like temperature, humidity, wind speed, and light intensity using sensors. ML models analyze this data to optimize plant growth conditions. Devices like fans and misters are controlled via MQTT, and a dashboard displays real-time data. The system is modular, supports future improvements like reinforcement learning, and can be adapted to other greenhouse setups.',
    technologies: ['Supervised Learning', '3D Modelling', 'Multithreading'],
    github: 'https://github.com/cepdnaclk/e18-6sp-Digital-Twin',
    demo: 'https://cepdnaclk.github.io/e18-6sp-Digital-Twin/',
    image: project2
  },
  {
    id: 3,
    title: 'Cake Order App-CakeDa',
    description: 'Developed an individual mobile app project aimed at encouraging indoor cake makers to sell their cakes. The app provides a convenient way for customers to purchase cakes from indoor cake makers. App was deployed in the Play Store.This is a mobile app developed using Flutter to help indoor cake makers sell their cakes. It uses Firebase Realtime Database for real-time data storage and synchronization, providing a smooth and scalable user experience across Android and iOS platforms.',
    technologies: ['Flutter', 'Firebase'],
    github: 'https://github.com/rasathuraikaran/CakeOrderApp',
    demo: 'https://play.google.com/store/apps/details?id=com.academind.CakeDA',
    image: project4
  },
  {
    id: 4,
    title: 'Smart Inventory Management',
    description: 'Contributed to the development of the components page, email sending system, and management of multiple roles, permissions , and dashboard.different dashboards will be used to handle functions of different users. By using the user dashboard students will be able to reserve component item listed on the page and the number of components available will be displayed and request permission from a lecturer. The status of the order and the details of the order will be displayed in the students dashboard. When the students place the reservation lectureres will be notified through email and lecturers can approve the requested reservations of the students by using the lecturers dashboard. After the approval of the lecturer the reservation details will be directed to the technical officer and the head of department. When neccessary requirements are completed the students can get their reservation on the notified date.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'Bootstrap', 'CSS'],
    github: 'https://github.com/cepdnaclk/e18-co227-Smart-Inventory-Management-System-Group-C',
    demo: 'https://cepdnaclk.github.io/e18-co227-Smart-Inventory-Management-System-Group-C/',
    image: project3
  }
];

const ProjectCard = ({ project }) => {
  const briefDescription = project.description.split('. ')[0] + '.';

  return (
    <Link to={`/projects/${project.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full mx-auto"
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
          <p className="text-gray-600 mb-4">{briefDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <FiGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.youtube && (
              <a 
                href={project.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
              >
                <FiExternalLink /> YouTube
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 tracking-wide drop-shadow-lg">Projects</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
