'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MHDriver: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.mhdriver-title',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mhdriver-title',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.mhdriver-desc',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mhdriver-desc',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.mhdriver-image',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mhdriver-image',
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-24 bg-white flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-16">
      {/* Left - Rounded Image */}
      <motion.div
        className="mhdriver-image w-80 h-80 md:w-[48rem] md:h-[38rem] rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/assets/Driver.png"
          alt="Driver"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right - Text Content */}
      <div className="flex-1 max-w-xl space-y-8">
        <motion.h1
          className="mhdriver-title text-5xl md:text-7xl font-black text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Become a <span className="text-red-600">Driver</span>
        </motion.h1>

        <motion.p
          className="mhdriver-desc text-lg md:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Ride with confidence. Our professional drivers are always ready to
          provide safe and comfortable rides wherever you go.
        </motion.p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://apps.apple.com/ca/app/mh-driver/id6739747580"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>App Store</span>
            <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://play.google.com/store/apps/details?id=com.app.mhridedriver&pcampaignid=web_share"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <span>Google Play</span>
            <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MHDriver;
