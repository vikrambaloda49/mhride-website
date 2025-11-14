'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const HowItWorksHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-32 pb-16 sm:pb-20">
      <motion.div
        className="text-center z-30 px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-red-500/10 rounded-full text-red-600 font-bold text-sm sm:text-base lg:text-lg border border-red-500/20 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          Revolutionary Experience
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          HOW IT
          <br />
          <span className="text-red-600 font-black relative">
            WORKS
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 font-light px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Experience the future of transportation with our revolutionary ride-sharing platform.
          <br className="hidden sm:block" />
          <span className="text-red-600 font-medium">Every journey is an adventure</span> waiting to unfold.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="https://apps.apple.com/ca/app/mhride/id6739747337"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto max-w-sm"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10 flex items-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>App Store</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </motion.a>
          
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-red-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto max-w-sm"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10 flex items-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Google Play</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-xs sm:text-sm text-gray-400 font-medium">Scroll for more</div>
          <div className="w-[2px] h-12 sm:h-16 bg-gray-200 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-4 sm:h-6 bg-gradient-to-b from-red-600 to-transparent rounded-full"
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorksHero;