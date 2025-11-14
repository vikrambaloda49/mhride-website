'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import StepVisual from './StepVisual';

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  features: string[];
}

interface StepItemProps {
  step: Step;
  index: number;
}

const StepItem: React.FC<StepItemProps> = ({ step, index }) => {
  const StepIcon = step.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center relative bg-white"
    >
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <motion.div
            className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-6 mb-8"
              animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                <StepIcon className="w-12 h-12 text-white" />
              </div>
              <div className="px-6 py-3 bg-black text-white rounded-2xl font-medium text-xl shadow-lg">
                STEP {step.id}
              </div>
            </motion.div>

            <motion.h2
              className="text-6xl md:text-7xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {step.title}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-10 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {step.description}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {step.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={isInView ? { y: [20, 0] } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <Star className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-gray-900">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <StepVisual stepId={step.id} isInView={isInView} />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default StepItem;
