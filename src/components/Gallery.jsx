import { motion } from 'framer-motion';
import { useState } from 'react';


  const images = [
    {
      id: 1,
      src: '/images/achievements/ach1.jpeg',
      title: '2nd Runner-Up – GTN AIvolution Competition'
    },
    {
      id: 2,
      src: '/images/achievements/ach2.jpg',
      title: 'Champions – ACES Hackfest'
    },
    {
      id: 3,
      src: '/images/achievements/hackthon.jpg',
      title: 'Champions – ACES Hackathon'
    },
    {
      id: 4,
      src: '/images/achievements/explanation.jpg',
      title: 'Explaining Computer Engineering & Its Scope to school students'
    },
    {
      id: 5,
      src: '/images/achievements/google.jpg',
      title: 'Attended Google Developer Meetup'
    },
    {
      id: 6,
      src: '/images/achievements/precoders.jpg',
      title: '8th Place – Precoders Event by Percom (Qualified for Coders Finals)'
    },
    {
      id: 7,
      src: '/images/achievements/coders.jpg',
      title: '12th Place – Coders Event by Percom '
    },
    {
      id: 8,
      src: '/images/achievements/GTNwisebot.jpg',
      title: '2nd Runner-Up – GTN Tech AI Competition'
    },
    {
      id: 9,
      src: '/images/achievements/volleyball.jpg',
      title: 'Volleyball Champions – Captain of Engineering Tamil Faculty Team (Pera)'
    }
  ];
  


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Achievements Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (image.id - 1) * 0.1 }}
                className="group relative"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{selectedImage.title}</h3>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
