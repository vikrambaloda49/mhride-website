'use client';

import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { ArrowRight, Mail, Clock, Shield, Zap } from 'lucide-react';

const SupportSection: React.FC = () => {
  const supportRef = useRef<HTMLDivElement>(null);
  const isSupportInView = useInView(supportRef, { once: true, amount: 0.3 });

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
    <section ref={supportRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isSupportInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-8"
          >
            <Shield className="w-4 h-4" />
            24/7 Support
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            WE&apos;RE HERE
            <br />
            <span className="text-red-600">TO HELP</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our dedicated support team is available around the clock to assist you with any questions or concerns.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isSupportInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="group relative bg-white backdrop-blur-lg p-12 rounded-3xl shadow-md hover:shadow-lg transition-all duration-500"
            whileHover={{ scale: 1.02, y: -8 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-red-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ padding: '2px' }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Email Support
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get personalized assistance from our expert support team. We typically respond within 2 hours.
              </p>

              <motion.a
                href="mailto:support@mhride.ca"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                support@mhride.ca
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;