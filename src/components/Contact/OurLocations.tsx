'use client';

import React, { useRef, useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const OurLocations: React.FC = () => {
  const locationsRef = useRef<HTMLDivElement>(null);
  const isLocationsInView = useInView(locationsRef, { once: true, amount: 0.2 });
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  // Locations data
  const locations = [
    { id: 1, city: 'Medicine Hat', state: 'Alberta', rides: '5K+', drivers: '10+' },
    { id: 2, city: 'Desert Blume', state: 'Alberta', rides: '200+', drivers: '4+' },
    { id: 3, city: 'Redcliff', state: 'Alberta', rides: '500K+', drivers: '10+' },
    { id: 4, city: 'Dunmore', state: 'Alberta', rides: '200K+', drivers: '2+' },
    { id: 5, city: 'Brooks', state: 'Alberta', rides: '300+', drivers: '4+' },
    { id: 6, city: 'Suffield', state: 'Alberta', rides: '100+', drivers: '2+' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section ref={locationsRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLocationsInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-8"
          >
            <MapPin className="w-4 h-4" />
            Service Areas
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            WHERE WE
            <br />
            <span className="text-red-600">OPERATE</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;re expanding rapidly to bring you premium ride services in major cities across the country.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLocationsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={cardVariants}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500"
              whileHover={{ scale: 1.03, y: -8 }}
              onHoverStart={() => setHoveredLocation(location.id)}
              onHoverEnd={() => setHoveredLocation(null)}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  animate={{
                    rotate: hoveredLocation === location.id ? 10 : 0,
                    scale: hoveredLocation === location.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {location.city}
                </h3>
                
                <p className="text-gray-600 font-semibold mb-6">
                  {location.state}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-black text-gray-900">{location.rides}</div>
                    <div className="text-gray-500">Total Rides</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-black text-gray-900">{location.drivers}</div>
                    <div className="text-gray-500">Active Drivers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurLocations;