'use client';

import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ProgressIndicatorProps {
  smoothProgress: MotionValue<number>;
  activeStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  smoothProgress,
  activeStep,
  totalSteps
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">

      <div className="mt-6 space-y-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full border-3 transition-all duration-500 ${
              activeStep >= index ? 'bg-red-600 border-red-600 shadow-lg' : 'bg-gray-400 border-gray-200'
            }`}
            animate={{
              scale: activeStep === index ? 1.4 : 1,
              rotate: activeStep === index ? 360 : 0,
              boxShadow: activeStep === index ? '0 0 20px rgba(220, 38, 38, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ duration: 0.6 }}
          >
            {activeStep >= index && (
              <motion.div
                className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;