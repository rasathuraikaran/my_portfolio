import { motion } from 'framer-motion';

const Articles = () => {
  const articles = [
    {
      title: "Java's Funeral Has Been Announced, But Nobody Showed Up!",
      url: "https://medium.com/javarevisited/javas-funeral-has-been-announced-but-nobody-showed-up-bcfe0995a77b",
      publication: "JavaRevisited"
    },
    {
      title: "Java 24 Is Here, But Does Anyone Care?",
      url: "https://medium.com/javarevisited/java-24-is-here-but-does-anyone-care-7fbb1d5cea1b",
      publication: "JavaRevisited"
    },
    {
      title: "What Happened to RestTemplate? The Rise of WebClient and OkHttpClient",
      url: "https://medium.com/javarevisited/what-happened-to-resttemplate-the-rise-of-webclient-and-okhttpclient-016ccf9b0e16",
      publication: "JavaRevisited"
    },
    {
      title: "10 Java Tricks That Will Make You a Coding Rockstar",
      url: "https://medium.com/javarevisited/10-java-tricks-that-will-make-you-a-coding-rockstar-153df758f23a",
      publication: "JavaRevisited"
    },
    {
      title: "Code to Cloud: Building a Spring Boot Demo App, Dockerizing, and Automating AWS ECR Deployment",
      url: "https://medium.com/javarevisited/code-to-cloud-building-a-spring-boot-demo-app-dockerizing-and-automating-aws-ecr-deployment-with-2c741b842994",
      publication: "JavaRevisited"
    }
  ];

  return (
    <section id="articles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Popular Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I write about Java, Spring Boot, and Cloud technologies. My articles have been read by thousands of developers worldwide.
          </p>
          <a 
            href="https://medium.com/@rasathuraikaran26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View all articles on Medium →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {article.publication}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  Read article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
