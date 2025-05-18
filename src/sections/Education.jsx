import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'University of Peradeniya',
    location: 'Kandy, Sri Lanka',
    duration: '2019 - 2024',
    description: [
      'GPA: 3.65/4.0',
      'Relevant Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Computer Networks, Web Development, Machine Learning',
      'The Faculty of Engineering, University of Peradeniya, is a government-funded institution where admission is based on G.C.E. A/L Z-scores in the Physical Science stream. The UGC selects students through a merit-based system, offering free education. After a common first-year curriculum, students choose their engineering discipline based on performance and preference.'
    ]
  },
  {
    id: 2,
    degree: 'GCE Advanced Level (Physical Science Stream)',
    institution: 'J/Chulipuram Victoria College',
    location: 'Jaffna, Sri Lanka',
    duration: '2016 - 2018',
    description: [
      'Results: 3A passes in Physics, Chemistry, and Combined Mathematics',
      'Senior Prefect - Led a team of 40 prefects to maintain school discipline and organized school-wide events',
      'Volleyball Team Captain - Led the team to win the provincial championship'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 pb-12 border-l-2 border-gray-200 group"
              >
                <div className="absolute w-6 h-6 rounded-full bg-primary -left-3.5 flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xs" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-lg text-gray-600">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {edu.location}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {edu.description.map((item, i) => (
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

export default Education;
