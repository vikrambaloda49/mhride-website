'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface AnimatedCarProps {
  scrollProgress: MotionValue<number>;
  activeStep: number;
  steps: Array<{ car: string }>;
}

const AnimatedCar: React.FC<AnimatedCarProps> = ({ scrollProgress, activeStep, steps }) => {
  // Car movement animation
  const carY = useTransform(scrollProgress, [0, 1], [0, typeof window !== 'undefined' ? window.innerHeight * 3.5 : 2800]);
  const carRotate = useTransform(scrollProgress, [0, 0.25, 0.5, 0.75, 1], [0, 15, -10, 20, 0]);
  const carScale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <motion.div
      className="fixed left-24 z-20"
      style={{ 
        y: carY, 
        rotate: carRotate,
        scale: carScale
      }}
    >
      <motion.div
        className="relative text-7xl filter drop-shadow-xl"
        animate={{
          x: [0, 30, -15, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {steps[activeStep]?.car || '🚗'}
        
        {/* Car trail effect */}
        <motion.div
          className="absolute inset-0 text-7xl opacity-30"
          animate={{
            x: [-10, -20, -30],
            opacity: [0.3, 0.1, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          {steps[activeStep]?.car || '🚗'}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCar;