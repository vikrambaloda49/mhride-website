'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MapPin, Star } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >


      <div className="text-center z-30 px-8 max-w-6xl mx-auto">
        <motion.div
          className="text-8xl mb-12"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🚀
        </motion.div>
        
        <motion.h2
          className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Ready to 
          <span className="text-red-600"> Start?</span>
        </motion.h2>

        <motion.p
          className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Join millions of satisfied riders and experience transportation like never before. 
          <span className="text-red-600 font-medium">Download now</span> and get your first ride free!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.a
                          href="https://apps.apple.com/ca/app/mhride/id6739747337"
                          whileHover={{ scale: 1.03, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="relative z-10 flex items-center gap-3">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span>App Store</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.a>
                        
                        <motion.a
                          href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
                          whileHover={{ scale: 1.03, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="relative z-10 flex items-center gap-3">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <span>Google Play</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.a>
        </motion.div>

        
      </div>

  
    </motion.div>
  );
};

export default CTASection;