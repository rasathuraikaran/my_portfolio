import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { achievements } from '../sections/Achievements';

const AchievementDetails = () => {
  const { id } = useParams();
  const achievement = achievements[parseInt(id) - 1];

  if (!achievement) {
    return <div className="text-center py-16">Achievement not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
    >
      <div className="mb-8">
        {achievement.image && (
          <img 
            src={achievement.image} 
            alt={achievement.title}
            className="w-full rounded-lg shadow-xl"
          />
        )}
      </div>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{achievement.title}</h1>
        
        <div className="text-gray-600">
          <p className="mb-4">{achievement.description}</p>
          
          {achievement.awarder && (
            <p className="text-lg font-semibold mb-4">
              Awarded by: {achievement.awarder}
            </p>
          )}
          
          {achievement.date && (
            <p className="text-lg font-semibold mb-4">
              Date: {achievement.date}
            </p>
          )}
        </div>

        {achievement.links && achievement.links.length > 0 && (
          <div className="flex flex-col md:flex-row gap-4">
            {achievement.links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiExternalLink /> {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementDetails;
