'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Mail } from 'lucide-react';

const AboutHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isHeroInView && heroRef.current) {
        const tl = gsap.timeline();
        
        tl.fromTo(heroRef.current.querySelector('.hero-badge'), {
          opacity: 0,
          scale: 0.8,
          y: 30
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)"
        })
        .fromTo(heroRef.current.querySelector('.hero-title'), {
          opacity: 0,
          y: 80,
          rotationX: 45
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power4.out"
        }, "-=0.4")
        .fromTo(heroRef.current.querySelector('.hero-subtitle'), {
          opacity: 0,
          y: 40
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6");
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isHeroInView]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-white overflow-hidden pt-20"
    >


      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="text-center max-w-4xl mx-auto">
            
            <motion.div
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Mail className="w-4 h-4" />
              Learn About Us
            </motion.div>

            <motion.h1
              className="hero-title text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tight mb-8"
              initial={{ opacity: 0, y: 80 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              About
              <br />
              <span className="text-red-600 relative">
                MHride
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-red-500/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={isHeroInView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="hero-subtitle text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Need assistance? Have questions? We&apos;re here to help you have the best ride experience possible.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-xs text-gray-400 font-medium">Scroll for more</div>
        <div className="w-[2px] h-16 bg-gray-200 rounded-full relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-red-600 to-transparent rounded-full"
            animate={{
              y: [0, 40, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;