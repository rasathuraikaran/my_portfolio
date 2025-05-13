import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'PHP', level: 75 },
      { name: 'C', level: 70 },
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Spring/Spring Boot', level: 90 },
      { name: 'Flutter', level: 85 },
      { name: 'ReactJS', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firestore', level: 75 },
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'GitLab CI/CD', level: 80 },
      { name: 'Jira', level: 85 },
    ]
  }
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I'm proficient in. I'm always learning and expanding my skill set.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'RESTful APIs', 'Microservices', 'OOP', 'Data Structures', 'Algorithms',
              'Agile/Scrum', 'CI/CD', 'TDD', 'Clean Code', 'Problem Solving',
              'System Design', 'UI/UX Principles', 'Responsive Design', 'Version Control'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
