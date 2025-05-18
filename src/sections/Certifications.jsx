import React from 'react';

const certifications = [
  {
    id: 1,
    title: 'AWS Knowledge: Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Feb 2025',
    skills: ['AWS Cloud Fundamentals', 'AWS Services'],
    src: '/images/certificates/cloudEssential.pdf'
  },
  {
    id: 2,
    title: 'AWS Billing and Cost Management',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jan 2025',
    skills: ['Amazon Web Services (AWS)'],
    src: '/images/certificates/billing.pdf'
  },
  
  {
    id: 4,
    title: 'Job Roles in the Cloud',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jan 2025',
    skills: ['Amazon Web Services (AWS)'],
    src: '/images/certificates/jobroles.pdf'
  },
  {
    id: 5,
    title: 'Supervised Machine Learning',
    issuer: 'Coursera',
    date: 'Mar 2023',
    skills: ['Machine Learning'],
    src: '/images/certificates/super.pdf'
  },
  {
    id: 6,
    title: 'Getting Started with Spring Boot',
    issuer: 'Amigoscode',
    date: 'Feb 2023',
    skills: ['Spring Boot'],
    src: '/images/certificates/spring.pdf'
  },
  {
    id: 7,
    title: 'Google Kick Start',
    issuer: 'Google',
    date: 'Jan 2022',
    skills: ['Problem Solving'],
    src: '/images/certificates/google.pdf'
  },
  {
    id: 8,
    title: 'Java Certification',
    issuer: 'HackerRank',
    date: 'Jun 2021',
    skills: ['Java'],
    src: '/images/certificates/java.pdf'
  },
 
  {
    id: 10,
    title: 'Python Programming',
    issuer: 'Coursera',
    date: 'Jul 2020',
    skills: ['Python'],
    src: '/images/certificates/python1.jpeg'
  },
  {
    id: 12,
    title: 'Problem Solving',
    issuer: 'HackerRank',
    date: 'Basic Level',
    skills: ['Problem Solving'],
    src: '/images/certificates/problem.pdf'
  }
];

const Certifications = () => {
  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-indigo-700">{cert.title}</h3>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{cert.issuer}</p>
              {cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <a 
                  href={cert.src} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-indigo-100 p-4 rounded-lg text-center hover:bg-indigo-200 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(cert.src, '_blank');
                  }}
                >
                  <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-indigo-700">View Certificate</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
