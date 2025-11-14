'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import individual components
import ContactHero from './ContactHero';
import SupportSection from './SupportSection';
import OurLocations from './OurLocations';
import HowItWorks from './HowItWorks';
import DownloadSection from './DownloadSection';
import CTASection from './CTASection';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <ContactHero />
      <SupportSection />
      <OurLocations />
      <HowItWorks />
      <DownloadSection />
      <CTASection/>
      
    </div>
  );
};

export default Contact;
