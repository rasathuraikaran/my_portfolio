import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'GTN Tech',
    location: 'Colombo, Sri Lanka',
    duration: 'Jul 2024 – Present',
    description: [
      'Managed and maintained legacy Spring, and Spring Boot components, ensuring timely releases at the end of each Spring release cycle.',
      'Developed a robust data-saving package enabling seamless integration across multiple databases using DBLink.',
      'Integrated REST API calls and XML processing within components to enhance data exchange and interaction.',
      'Conducted thorough smoke and performance tests to ensure software reliability, stability, and efficiency.',
      'Optimized the statement sender module, improving execution time by 60% through the efficient use of Java’s Parallel Stream API.',
      'Enhanced the Master Service for client-side data retrieval by implementing GraphQL queries and mutations.'
    ]
  },
  {
    id: 2,
    role: 'Software Engineer - Contract',
    company: 'GTN Tech',
    location: 'Colombo, Sri Lanka',
    duration: 'Dec 2023 – Feb 2024',
    description: [
      'Optimized Docker images for six components, reducing image size by 30%.',
      'Automated Docker image builds and pushes to AWS ECR using GitLab pipelines, enhancing deployment speed.',
      'Worked on Authentication service employing JWT token technology, establishing Rest APIs for signin, signup, and password management.'
    ]
  },
  {
    id: 3,
    role: 'Software Engineer Intern',
    company: 'GTN Tech',
    location: 'Colombo, Sri Lanka',
    duration: 'Jul 2023 – Dec 2023',
    description: [
      'Implemented microservices communication using the Feign client to enhance service interoperability.',
      'Enhanced security measures by integrating multifactor authentication.',
      'Conducted unit tests for Authentication service using JUnit and Mockito frameworks.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 pb-12 border-l-2 border-gray-200 group"
              >
                <div className="absolute w-6 h-6 rounded-full bg-primary -left-3.5 flex items-center justify-center">
                  <FaBriefcase className="text-white text-xs" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {exp.location}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
