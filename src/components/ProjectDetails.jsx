import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiYoutube } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { projects } from '../sections/Projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 w-full"
    >
      <div className="mb-8">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-lg shadow-xl"
          />
        )}
      </div>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
        
        <div className="text-gray-600">
          <p className="mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FiGithub /> View on GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <FiExternalLink /> View Demo
          </a>
        )}
        
        {project.youtube && (
          <a 
            href={project.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <FiYoutube /> YouTube
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
