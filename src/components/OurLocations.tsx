'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Medicine Hat', description: 'Your go-to ride service in the heart of Medicine Hat.' },
  { name: 'Brooks', description: 'Seamless transportation across Brooks with MHride.' },
  { name: 'Redcliff', description: 'Reliable rides and coverage in Redcliff.' },
  { name: 'Surrounding Areas', description: 'Expanding convenience to nearby towns and areas.' },
];

const OurLocations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.location-card'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight"
        >
          Our <span className='text-red-600'> Locations </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Discover the cities and areas we proudly serve.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="location-card bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              {location.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {location.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurLocations;
