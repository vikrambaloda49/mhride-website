import React from 'react'
import OurLocations from '../OurLocations';
import AboutHero from './AboutHero';
import CTASection from '../HowItWorks/CTASection';
import AboutWording from './AboutWording';
import OurValues from './OurValues';
import Commitment from './Commitment';

const About = () => {
  return (
    <div  className="min-h-screen bg-white">
      <AboutHero />
      <AboutWording/>
      <OurValues/>
      <Commitment/>
      <OurLocations />
      <CTASection/>
    </div>
  );
}

export default About