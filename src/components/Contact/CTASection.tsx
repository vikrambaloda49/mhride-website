'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-5xl p-20 rounded-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Ride?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily transportation needs.
          </p>
          

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;