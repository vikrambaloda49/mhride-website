'use client';

import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Download, ArrowRight, Users, Star, Shield } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const downloadRef = useRef<HTMLDivElement>(null);
  const isDownloadInView = useInView(downloadRef, { once: true, amount: 0.3 });

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
    <section ref={downloadRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isDownloadInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-8"
          >
            <Download className="w-4 h-4" />
            Get Started
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            DOWNLOAD
            <br />
            <span className="text-red-600">THE APP</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Ready to start riding? Download our app and experience the future of transportation today.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="https://apps.apple.com/ca/app/mhride/id6739747337"
              className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
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
              className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
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

          {/* App Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              className="group text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/70 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="font-black text-gray-900 mb-2">200+ Users</h4>
              <p className="text-sm text-gray-600">Join our growing community</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/70 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="font-black text-gray-900 mb-2">4.9 Rating</h4>
              <p className="text-sm text-gray-600">Highly rated experience</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/70 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="font-black text-gray-900 mb-2">100% Safe</h4>
              <p className="text-sm text-gray-600">Verified drivers & rides</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;