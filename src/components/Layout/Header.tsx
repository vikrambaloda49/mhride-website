'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo with Animation */}
            <motion.div 
              className="flex items-center cursor-pointer z-50"
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
                  className="h-8 sm:h-12 md:h-14 w-auto"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut" 
                  }}
                >
                  <motion.a
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium relative py-2 text-sm xl:text-base"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
              
              {/* Desktop Download Buttons */}
              <motion.div
                className="flex items-center gap-2 xl:gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <motion.a
                  href="https://apps.apple.com/ca/app/mhride/id6739747337"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 bg-gray-900 text-white px-3 xl:px-4 py-2 rounded-xl font-medium text-xs xl:text-sm overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                    <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>App Store</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 bg-red-600 text-white px-3 xl:px-4 py-2 rounded-xl font-medium text-xs xl:text-sm overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                    <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Google Play</span>
                  </div>
                </motion.a>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Navigation - Fixed and Non-Scrolling */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content - Fixed positioning prevents scrolling */}
            <motion.div
              className="absolute inset-0 bg-white overflow-y-auto overscroll-contain"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="min-h-full flex flex-col pt-20 sm:pt-24 pb-8 px-6">
                
                {/* Mobile Navigation Items */}
                <nav className="flex-1 flex flex-col justify-center space-y-2 sm:space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <motion.a
                        href={item.href}
                        className="block text-2xl sm:text-3xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300 py-3 sm:py-4 border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          <ArrowRight className="w-6 h-6 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </motion.a>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile Download Buttons */}
                <motion.div
                  className="mt-8 space-y-3 sm:space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <motion.a
                    href="https://apps.apple.com/ca/app/mhride/id6739747337"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 flex items-center gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span>Download on App Store</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 flex items-center gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span>Get it on Google Play</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                </motion.div>

                {/* Close hint */}
                <motion.p
                  className="text-xs sm:text-sm text-gray-400 text-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Swipe right or tap outside to close
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;