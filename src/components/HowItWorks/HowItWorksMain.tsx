'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { Smartphone, MapPin, Car, CheckCircle } from 'lucide-react';

// Import components
import HowItWorksHero from './HowItWorksHero';
import ProgressIndicator from './ProgressIndicator';
import StepsSection from './StepsSection';
import CTASection from './CTASection';


const HowItWorksMain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeStep, setActiveStep] = useState(0);

  // Steps configuration
  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: 'Download App',
      description: 'Get our app from App Store or Google Play and create your account in seconds. Experience the future of transportation at your fingertips.',
      color: 'from-red-500 via-red-600 to-red-700',
      car: '🚗',
      features: ['Instant Setup', 'Secure Login', 'Profile Creation']
    },
    {
      id: 2,
      icon: MapPin,
      title: 'Set Location',
      description: 'Enter your pickup location and destination. Our AI-powered system finds the optimal route considering traffic, weather, and your preferences.',
      color: 'from-red-500 via-red-600 to-red-700',
      car: '🚙',
      features: ['GPS Tracking', 'Smart Routing', 'Live Traffic']
    },
    {
      id: 3,
      icon: Car,
      title: 'Choose Ride',
      description: 'Select from our premium fleet: Economy for budget trips, Premium for comfort, or Luxury for the ultimate experience.',
      color: 'from-red-500 via-red-600 to-red-700',
      car: '🚘',
      features: ['Multiple Options', 'Fair Pricing', 'Vehicle Preview']
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Enjoy Journey',
      description: 'Track your driver in real-time, enjoy premium amenities, and rate your experience. Your satisfaction is our priority.',
      color: 'from-red-500 via-red-600 to-red-700',
      car: '🏎️',
      features: ['Real-time Tracking', 'Premium Comfort', 'Safe Arrival']
    }
  ];

  // Update active step based on scroll position
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      const step = Math.floor(latest * 4);
      setActiveStep(Math.min(step, 3));
    });
    return unsubscribe;
  }, [smoothProgress]);

  return (
    <div ref={containerRef} className="min-h-[500vh] bg-white relative overflow-hidden">
      {/* Background Effects */}

      {/* Progress Indicator */}
      <ProgressIndicator 
        smoothProgress={smoothProgress} 
        activeStep={activeStep} 
        totalSteps={steps.length} 
      />

      {/* Hero Section */}
      <HowItWorksHero />

      {/* Steps Section */}
      <StepsSection steps={steps} />

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
};

export default HowItWorksMain;