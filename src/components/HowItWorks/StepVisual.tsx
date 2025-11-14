'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface StepVisualProps {
  stepId: number;
  isInView: boolean;
}

const StepVisual: React.FC<StepVisualProps> = ({ stepId, isInView }) => {
  const renderStepContent = () => {
    switch (stepId) {
      case 1:
        return (
          <motion.div
            className="w-72 h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-3 mx-auto shadow-2xl"
            animate={isInView ? { y: [20, 0] } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="w-full h-full bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
              
                               
                          <motion.div 
                            className="flex items-center cursor-pointer mb-10"
                            whileHover={{ 
                              scale: 1.05,
                              rotate: [0, -5, 5, 0],
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ 
                              duration: 0.3,
                              rotate: { duration: 0.6, ease: "easeInOut" }
                            }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{
                                filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))"
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image 
                                src="/assets/logo/logo.svg" 
                                alt="Logo" 
                                width={220} 
                                height={80}
                                className="h-10 md:h-16 w-auto"
                                priority
                              />
                            </motion.div>
                          </motion.div>
              <h3 className="font-medium text-2xl text-gray-900 mb-6"><span className='font-black text-red-600'> MH</span>ride App</h3>
              <div className="w-full space-y-4">
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                </div>
                <p className="text-gray-600 text-sm font-medium">Setting up your account...</p>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            className="w-full h-96 bg-gradient-to-br from-red-50 to-white rounded-3xl p-6 relative overflow-hidden border border-red-100"
            animate={isInView ? { scale: [0.9, 1] } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <motion.div
              className="absolute top-1/3 left-1/3 w-6 h-6 bg-red-600 rounded-full shadow-xl z-10"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0 0px rgba(220, 38, 38, 0.7)', '0 0 0 30px rgba(220, 38, 38, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gray-900 rounded-full shadow-xl z-10"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 0px rgba(17, 24, 39, 0.7)', '0 0 0 20px rgba(17, 24, 39, 0)']
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
            />

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <p className="text-sm font-bold text-gray-900">Route optimized</p>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            className="space-y-6"
            animate={isInView ? { y: [30, 0] } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { type: '🚗 Economy', price: '$15', time: '2 min', selected: false },
              { type: '🚙 Premium', price: '$25', time: '4 min', selected: true },
              { type: '🏎️ Luxury', price: '$45', time: '6 min', selected: false }
            ].map((car, i) => (
              <motion.div
                key={car.type}
                className={`flex items-center justify-between p-6 rounded-2xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                  car.selected 
                    ? 'bg-red-50 border-red-600 shadow-xl' 
                    : 'bg-white border-gray-200 hover:border-red-300 hover:bg-red-50/30'
                }`}
                whileHover={{ x: car.selected ? 0 : 10, scale: car.selected ? 1 : 1.02 }}
                animate={isInView ? { x: [-50, 0] } : {}}
                transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{car.type.split(' ')[0]}</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">{car.type.split(' ')[1]}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{car.time}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className={`font-black text-xl ${car.selected ? 'text-red-600' : 'text-gray-900'}`}
                  animate={car.selected ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {car.price}
                </motion.div>
                {car.selected && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            className="text-center py-8"
            animate={isInView ? { scale: [0.8, 1] } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="text-9xl mb-8"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🏎️
            </motion.div>
            
            <motion.div
              className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <p className="text-green-800 font-black text-xl">Journey Complete!</p>
              <p className="text-green-700 text-sm mt-2">You have arrived safely</p>
            </motion.div>
            
            <div className="flex justify-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 text-yellow-400 text-2xl"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.15, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                >
                  ⭐
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 font-bold mt-4">Rate your experience</p>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="relative bg-white rounded-[3rem] p-10 shadow-2xl overflow-hidden border border-gray-100"
      whileHover={{ scale: 1.02, rotateY: 5 }}
      style={{ perspective: '1000px' }}
    >
      {renderStepContent()}



    </motion.div>
  );
};

export default StepVisual;