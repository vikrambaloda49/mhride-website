'use client';

import React, { useRef, useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Smartphone, MapPin, Car, CheckCircle, Navigation } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // How it works steps
  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: 'Download App',
      description: 'Get our app from App Store or Google Play and create your account in seconds.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: MapPin,
      title: 'Set Location',
      description: 'Enter your pickup location and destination. We\'ll find the best route for you.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: Car,
      title: 'Choose Ride',
      description: 'Select from Economy, Premium, or Luxury vehicles based on your needs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Enjoy Journey',
      description: 'Track your driver in real-time and enjoy a safe, comfortable ride.',
      color: 'from-red-500 to-red-600'
    }
  ];

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
    <section ref={howItWorksRef} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHowItWorksInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-8"
          >
            <Navigation className="w-4 h-4" />
            Simple Process
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            HOW IT
            <br />
            <span className="text-red-600">WORKS</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Getting your ride is simple and straightforward. Follow these easy steps to experience premium transportation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHowItWorksInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.03, y: -8 }}
                onHoverStart={() => setActiveStep(step.id)}
                onHoverEnd={() => setActiveStep(null)}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg"
                  animate={{
                    scale: activeStep === step.id ? 1.1 : 1,
                    rotate: activeStep === step.id ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.id}
                </motion.div>

                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  animate={{
                    rotate: activeStep === step.id ? 10 : 0,
                    scale: activeStep === step.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated progress line for non-last items */}
                {step.id < steps.length && (
                  <motion.div
                    className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-gradient-to-r from-gray-300 to-gray-200"
                    initial={{ scaleX: 0 }}
                    animate={isHowItWorksInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: step.id * 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;