'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface AnimatedPathsProps {
  scrollProgress: MotionValue<number>;
}

const AnimatedPaths: React.FC<AnimatedPathsProps> = ({ scrollProgress }) => {
  // Enhanced animated path drawing with multiple paths
  const pathLength1 = useTransform(scrollProgress, [0, 0.25], [0, 1]);
  const pathLength2 = useTransform(scrollProgress, [0.25, 0.5], [0, 1]);
  const pathLength3 = useTransform(scrollProgress, [0.5, 0.75], [0, 1]);
  const pathLength4 = useTransform(scrollProgress, [0.75, 1], [0, 1]);

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.3))' }}
    >
      {/* Main curved path */}
      <motion.path
        d="M 120 150 Q 300 250 200 450 T 400 650 Q 300 850 450 1050 T 250 1250 Q 400 1450 300 1650"
        stroke="url(#mainGradient)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="15 8"
        style={{
          pathLength: useTransform(scrollProgress, [0, 1], [0, 1])
        }}
      />
      
      {/* Secondary decorative paths */}
      <motion.path
        d="M 50 200 Q 150 300 100 500"
        stroke="url(#secondaryGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        style={{ pathLength: pathLength1 }}
      />
      
      <motion.path
        d="M 350 400 Q 450 500 400 700"
        stroke="url(#secondaryGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        style={{ pathLength: pathLength2 }}
      />
      
      <motion.path
        d="M 150 800 Q 250 900 200 1100"
        stroke="url(#secondaryGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        style={{ pathLength: pathLength3 }}
      />
      
      <motion.path
        d="M 400 1200 Q 500 1300 450 1500"
        stroke="url(#secondaryGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        style={{ pathLength: pathLength4 }}
      />

      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ef4444" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f87171" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fecaca" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedPaths;