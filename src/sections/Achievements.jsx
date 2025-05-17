import React from 'react';
import ach1 from '../assets/ach1.jpeg';
import ach2 from '../assets/ach2.jpg';

const achievements = [
  {
    title: '2nd runner-up of GTN AIvolution competition',
    issuer: 'GTN Tech',
    date: 'Nov 2023',
    description: 'Achieved 2nd runner-up position at the GTN AIvolution competition, associated with GTN Tech.',
    image: ach1
  },
  {
    title: 'Winners of ACES Hackfest',
    issuer: 'ACES, University of Peradeniya',
    date: 'Jun 2023',
    description: 'Winners of the ACES Hackfest, organized by ACES, University of Peradeniya.',
    image: ach2
  }
];

const Achievements = () => (
  <section className="py-14 px-4 max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-lg">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 tracking-wide drop-shadow-lg">Achievements</h2>
    <div className="grid md:grid-cols-2 gap-10">
      {achievements.map((ach, idx) => (
        <div
          key={idx}
          className="relative group bg-white border-l-8 border-indigo-500 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="absolute -top-4 left-4">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-widest">
              {idx === 0 ? '2nd Runner-up' : 'Winner'}
            </span>
          </div>
          <img
            src={ach.image}
            alt={ach.issuer + ' logo'}
            className="w-24 h-24 object-contain rounded-full border-4 border-indigo-200 shadow mb-4 bg-white"
          />
          <h3 className="text-2xl font-bold text-indigo-800 text-center mb-2 drop-shadow-sm">
            {ach.title}
          </h3>
          <p className="text-indigo-500 font-medium text-center mb-1">
            {ach.issuer} &middot; {ach.date}
          </p>
          <p className="text-gray-600 text-center mt-1 mb-2">
            {ach.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
