import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
          
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              I am a Software Engineer with over 1 year of experience in Java, Spring, Spring Boot, 
              GraphQL, AWS, Docker, PostgreSQL, GitLab Pipelines, and Jira. I have a proven track record 
              of designing and delivering high-performing, reliable software solutions.
            </p>
            <p>
              I stay up-to-date with industry trends and continuously apply best practices to drive 
              innovation and efficiency in my work. My passion lies in creating robust, scalable, and 
              maintainable applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical 
              articles, or exploring new technologies. I believe in continuous learning and sharing 
              knowledge with the community.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Experience', value: '1+ Years' },
              { label: 'Projects', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Certifications', value: '5+' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                <p className="text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
