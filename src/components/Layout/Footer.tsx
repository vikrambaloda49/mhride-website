'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Zap,
  Heart,
  ExternalLink,
  Download
} from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [currentYear] = useState(new Date().getFullYear());
  const logoRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const linkVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Logo animation effect
  useEffect(() => {
    if (logoRef.current && isInView) {
      const logo = logoRef.current;
      logo.style.transform = 'scale(0.8) rotate(-10deg)';
      logo.style.opacity = '0';
      
      setTimeout(() => {
        logo.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        logo.style.transform = 'scale(1) rotate(0deg)';
        logo.style.opacity = '1';
      }, 300);
    }
  }, [isInView]);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    // { name: 'Cookies', href: '/cookies' },
  ];

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-full mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="pt-20 pb-12"
        >
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            
            {/* Left: Brand & Description */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Animated Logo */}
              <div className="flex items-center space-x-4">
                <motion.div
                  ref={logoRef}
                  className="relative w-16 h-16"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logo SVG placeholder - replace with actual logo */}
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <motion.div 
              className="flex items-center cursor-pointer"
              onClick={scrollToTop}
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
                  </div>
                  
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 bg-red-500/20 rounded-2xl blur-lg"
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <div>
                  <motion.h3 
                    className="text-3xl font-medium text-white"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(239, 68, 68, 0)",
                        "0 0 10px rgba(239, 68, 68, 0.3)",
                        "0 0 0px rgba(239, 68, 68, 0)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <span className='text-red-600 font-black'>MH</span>ride
                  </motion.h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400 font-medium">Ride Anywhere</span>
                  </div>
                </div>
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                Experience premium transportation with our 24/7 ride service. 
                <motion.span 
                  className="text-red-400 font-semibold"
                  animate={{ color: ["#f87171", "#ef4444", "#f87171"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {" "}Safe, reliable, and always on time.
                </motion.span>
              </motion.p>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.a
                  href="mailto:support@mhride.ca"
                  className="group flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span className="font-medium">support@mhride.ca</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="p-2 bg-blue-500/20 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span className="font-medium">Available in 5+ Cities</span>
                </motion.div>
              </motion.div>

              {/* Download Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://apps.apple.com/ca/app/mhride/id6739747337"
                  className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>App Store</span>
                    <Download className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
                  className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Google Play</span>
                    <Download className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Links */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12">
              
              {/* Navigation Links */}
              <div>
                <motion.h4 
                  variants={itemVariants}
                  className="text-xl font-black text-white mb-8 relative"
                >
                  Links
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-red-500/50 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '60%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </motion.h4>
                
                <motion.ul 
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {navigationLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      variants={linkVariants}
                    >
                      <motion.a
                        href={link.href}
                        className="group flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="font-medium">{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Legal Links */}
              <div>
                <motion.h4 
                  variants={itemVariants}
                  className="text-xl font-black text-white mb-8 relative"
                >
                  Legal
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-blue-500/50 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '50%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </motion.h4>
                
                <motion.ul 
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {legalLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      variants={linkVariants}
                    >
                      <motion.a
                        href={link.href}
                        className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="font-medium">{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Rating Display */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-8 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 2 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">
                    <motion.span 
                      className="font-bold text-yellow-400"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      4.9/5
                    </motion.span> from 100+ happy riders
                  </p>
                </motion.div>
              </div>
            </motion.div>
            </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-12 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <motion.p 
                className="text-gray-400 text-sm flex items-center gap-2"
                variants={itemVariants}
              >
                © {currentYear} MH Ride. Made with 
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ["#ef4444", "#f87171", "#ef4444"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current inline" />
                </motion.span> 
                in Canada
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-6 text-sm text-gray-400"
                variants={itemVariants}
              >
                 <motion.a
      href="https://my-studio-three.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group text-sm font-medium text-gray-400 hover:text-white/80"
      whileHover={{ scale: 1.002 }}
    >

      <img
        src="https://my-studio-three.vercel.app/x.svg"
        alt="XTOIC Logo"
        className="w-3 h-3"
      />
      <span>Developed by XTOIC STUDIO</span>
      <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition" />
    </motion.a>
                
                <motion.span
                  className="flex items-center gap-2 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  24/7 Support
                </motion.span>
              </motion.div>
            </div>
            </motion.div>
        </motion.div>
        </div>
    </footer>
  );
};

export default Footer;