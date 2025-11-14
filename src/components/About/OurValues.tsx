'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Heart, Zap, Users, type LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
}

const values: Value[] = [
  {
    icon: Shield,
    title: "TRUST & SAFETY",
    description: "Your security is our priority. Every ride is protected with comprehensive insurance, real-time tracking, and 24/7 support to ensure peace of mind.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: Heart,
    title: "CUSTOMER FIRST",
    description: "We obsess over every detail of your experience. From booking to arrival, we're committed to exceeding expectations at every touchpoint.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    gradient: "from-red-600 to-red-700"
  },
  {
    icon: Zap,
    title: "INNOVATION",
    description: "Cutting-edge technology powers seamless experiences. We continuously evolve our platform to make transportation smarter and more efficient.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    icon: Users,
    title: "COMMUNITY",
    description: "We're building more than a service – we're creating connections. Every ride strengthens the fabric of our communities and cities.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    gradient: "from-green-600 to-green-700"
  }
];

const OurValues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  useEffect(() => {
    if (!titleRef.current || !valuesRef.current) return;

    // Animate title
    const titleChars = titleRef.current.querySelectorAll('.title-char');
    gsap.fromTo(titleChars,
      {
        opacity: 0,
        y: 100,
        rotateX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.1,
        stagger: 0.03,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
        }
      }
    );

    // Animate value cards
    const cards = valuesRef.current.querySelectorAll('.value-card');
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotateY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
          },
          delay: index * 0.1
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="title-char inline-block"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50% -50px'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        ref={titleRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="text-center mb-20"
      >
        <motion.h2
          className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-6"
        >
          <span className="text-red-600">
            {splitText('OUR')}
          </span>
          <br />
          {splitText('VALUES')}
        </motion.h2>

      </motion.div>

      {/* Values Grid */}
      <div
        ref={valuesRef}
        className="grid md:grid-cols-2 gap-8 lg:gap-12"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="value-card group relative"
            whileHover={{ 
              scale: 1.03,
              y: -10
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Card Background */}
            <motion.div
              className={`absolute inset-0 ${value.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              layoutId={`bg-${index}`}
            />
            
            {/* Card Content */}
            <div className="relative p-8 lg:p-10 rounded-3xl border border-gray-100 bg-white group-hover:border-transparent transition-colors duration-500 shadow-sm group-hover:shadow-xl">
              
              {/* Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl ${value.bgColor} mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500`}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1 
                }}
                transition={{ duration: 0.6 }}
              >
                <value.icon 
                  className={`w-8 h-8 ${value.color}`}
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 tracking-tight"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {value.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 leading-relaxed text-lg font-light"
                whileHover={{ 
                  color: '#374151',
                  transition: { duration: 0.3 }
                }}
              >
                {value.description}
              </motion.p>
            </div>

          </motion.div>
        ))}
      </div>


    </div>
  );
};

export default OurValues;