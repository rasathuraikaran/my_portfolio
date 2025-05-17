import { motion } from 'framer-motion';
import { SiMedium } from 'react-icons/si';

const articles = [
  {
    title: "Java's Funeral Has Been Announced….☠️💻",
    url: "https://medium.com/javarevisited/javas-funeral-has-been-announced-but-nobody-showed-up-bcfe0995a77b",
    publication: "JavaRevisited",
    tags: ['Java', 'Programming', 'Technology'],
    date: 'May 17, 2025',
    views: '57K',
    reads: '31K',
    readTime: '3 min read'
  },
  {
    title: "Java 24 Is Here, But Does Anyone Care?",
    url: "https://medium.com/javarevisited/java-24-is-here-but-does-anyone-care-7fbb1d5cea1b",
    publication: "JavaRevisited",
    tags: ['Java', 'Spring Boot', 'Cloud'],
    date: 'May 10, 2025',
    views: '18K',
    reads: '12K',
    readTime: '3 min read'
  },
  {
    title: "What Happened to RestTemplate? The Rise of WebClient and OkHttpClient",
    url: "https://medium.com/javarevisited/what-happened-to-resttemplate-the-rise-of-webclient-and-okhttpclient-016ccf9b0e16",
    publication: "JavaRevisited",
    tags: ['Java', 'Web Development', 'Performance'],
    date: 'May 3, 2025',
    views: '16K',
    reads: '12K',
    readTime: '3 min read'
  },
  {
    title: "10 Java Optimization Techniques That Will Make You a Java Master🧙‍♂️- Part 1!",
    url: "https://medium.com/javarevisited/10-java-tricks-that-will-make-you-a-coding-rockstar-153df758f23a",
    publication: "JavaRevisited",
    tags: ['Java', 'Tips', 'Best Practices'],
    date: 'April 25, 2025',
    views: '20.2K',
    reads: '12.1K',
    readTime: '3 min read'
  },
  {
    title: "Code to Cloud: Building a Spring Boot Demo App, Dockerizing, and Automating AWS ECR Deployment",
    url: "https://medium.com/javarevisited/code-to-cloud-building-a-spring-boot-demo-app-dockerizing-and-automating-aws-ecr-deployment-with-2c741b842994",
    publication: "JavaRevisited",
    tags: ['Spring Boot', 'AWS', 'DevOps'],
    date: 'April 18, 2025',
    views: '10K',
    reads: '6K',
    readTime: '6 min read'
  }
];

const Articles = () => (
  <section id="articles" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">My Medium Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Sharing insights on tech, finance, and life with over 4,300 followers. Daily articles about Java, Spring Boot, cloud technologies, and more.
        </p>
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-4xl md:text-5xl font-bold text-indigo-600">4,300+ followers</span>
          <SiMedium className="text-4xl text-indigo-600" />
        </div>
        <a 
          href="https://medium.com/@rasathuraikaran26" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          View all articles on Medium →
        </a>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <span>{article.date}</span>
                <span className="text-indigo-600">•</span>
                <span>{article.publication}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">{article.views}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{article.reads}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{article.readTime}</span>
                </div>
              </div>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Read Article →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Articles;
