'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Smartphone, Users, MapPin, Navigation, Star, Clock, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Interactive phone states
  const [currentTime, setCurrentTime] = useState('9:41');
  const [selectedLocation, setSelectedLocation] = useState('home');
  const [isBookingActive, setIsBookingActive] = useState(false);

  useEffect(() => {
    // Update time every minute for realism
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

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
        duration: 1,
        ease: "easeOut"
      }
    }
  };

const handleBookRide = () => {
  setIsBookingActive(true);
  setTimeout(() => {
    setIsBookingActive(false);
  }, 2000);

  // Deep link schemes (must be registered in your mobile apps)
  const androidScheme = "mhride://";
  const iosScheme = "mhride://";

  // Store links
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.app.mhridecustomer&hl=en";
  const appStoreUrl =
    "https://apps.apple.com/ca/app/mhride/id6739747337";

  // Detect user agent safely
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent || navigator.vendor : "";

  // Custom types for window properties TS doesn’t recognize
  const win = window as Window & { opera?: unknown; MSStream?: unknown };

  // ⏳ Wait 3s before running navigation logic
  setTimeout(() => {
    if (/android/i.test(userAgent)) {
      // Try opening the Android app
      window.location.href = androidScheme;

      // Fallback after 1.5s if app not installed
      setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 1500);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !win.MSStream) {
      // Try opening the iOS app
      window.location.href = iosScheme;

      // Fallback after 1.5s
      setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 1500);
    } else {
      // Default (desktop / unknown)
      window.location.href = appStoreUrl;
    }
  }, 2000); // <-- 2 second delay
};




  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-white overflow-hidden pt-20"
    >
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0">

        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b1b1b'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[calc(100vh-80px)] py-16">
          
          {/* Left Content - Enhanced */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm"
              >
                <Zap className="w-4 h-4" />
                Available 24/7
              </motion.div>

              <motion.h1
                ref={titleRef}
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 leading-[0.8] tracking-tight"
              >
                RIDE
                <br />
                <span className="text-red-600 font-black relative">ANYWHERE
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-red-500/30"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                ref={subtitleRef}
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light"
              >
                Experience seamless transportation with our premium ride service. 
                <span className="text-red-600 font-medium"> Book instantly</span> and travel in comfort.
              </motion.p>
            </div>

            {/* Enhanced Download Buttons */}
            <motion.div
              ref={ctaRef}
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://apps.apple.com/ca/app/mhride/id6739747337"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.app.mhridecustomer&pcampaignid=web_share"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              ref={statsRef}
              variants={containerVariants}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100"
            >
              <motion.div variants={itemVariants} className="text-center group">
                <motion.div 
                  className="flex justify-center mb-4 p-3 bg-green-50 rounded-full w-fit mx-auto group-hover:bg-green-100 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-6 h-6 text-green-600" />
                </motion.div>
                <div className="text-3xl font-black text-gray-900 mb-1">1K+</div>
                <div className="text-gray-500 text-sm font-medium">Happy Riders</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center group">
                <motion.div 
                  className="flex justify-center mb-4 p-3 bg-blue-50 rounded-full w-fit mx-auto group-hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <MapPin className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div className="text-3xl font-black text-gray-900 mb-1">5+</div>
                <div className="text-gray-500 text-sm font-medium">Cities</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center group">
                <motion.div 
                  className="flex justify-center mb-4 p-3 bg-yellow-50 rounded-full w-fit mx-auto group-hover:bg-yellow-100 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Star className="w-6 h-6 text-yellow-600" />
                </motion.div>
                <div className="text-3xl font-black text-gray-900 mb-1">4.9</div>
                <div className="text-gray-500 text-sm font-medium">Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - iPhone 16 with Dynamic Island - FIXED LAYOUT */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div
              ref={phoneRef}
              className="relative w-80 h-[640px] mx-2"
            >
              {/* iPhone 16 Frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3.5rem] shadow-2xl ring-1 ring-white/10">
                {/* Screen - Fixed height and overflow */}
                <div className="absolute inset-2 bg-black rounded-[3rem] overflow-hidden">
                  
                  {/* Dynamic Island */}
                  <motion.div
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 flex items-center justify-center"
                    animate={{
                      width: isBookingActive ? 200 : 128,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center gap-2 text-xs text-white/80"
                      animate={{ opacity: isBookingActive ? 1 : 0.6 }}
                    >
                      {isBookingActive ? (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Booking ride...</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                        </>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Screen Content - Fixed container with proper overflow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white rounded-[3rem] overflow-hidden">
                    
                    {/* Scrollable content container */}
                    <div className="h-full overflow-y-auto scrollbar-hide">
                      
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-12 pb-2">
                        <motion.span 
                          className="text-sm font-bold text-gray-900"
                          key={currentTime}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {currentTime}
                        </motion.span>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <motion.div className="w-1 h-1 bg-gray-900 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
                            <motion.div className="w-1 h-1 bg-gray-900 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                            <motion.div className="w-1 h-1 bg-red-600 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
                          </div>
                          <div className="ml-2 w-6 h-3 border border-gray-400 rounded-md">
                            <motion.div 
                              className="h-full bg-green-500 rounded-sm"
                              animate={{ width: ['60%', '80%', '60%'] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-6 py-3">
                        <div className="flex items-center justify-between mb-2">
                          <motion.h3 
                            className="text-gray-900 text-xl font-medium "
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Book a Ride
                          </motion.h3>
                          <motion.div 
                            className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Navigation className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                        
                        {/* Interactive Map - Reduced height */}
                        <motion.div 
                          className="h-32 bg-gradient-to-br from-blue-50 via-green-50 to-red-50 rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden mb-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center space-y-1">
                            <MapPin className="w-6 h-6 text-red-600 mx-auto" />
                            <p className="text-xs text-gray-500 font-semibold">Live Tracking</p>
                          </div>
                        </motion.div>
                        
                        {/* Location Inputs - Reduced spacing */}
                        <div className="space-y-2 mb-4">
                          <motion.div 
                            className={`flex items-center gap-2 p-3 rounded-xl transition-all cursor-pointer ${
                              selectedLocation === 'current' ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                            }`}
                            onClick={() => setSelectedLocation('current')}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: selectedLocation === 'current' ? [1, 1.3, 1] : 1 }}
                              transition={{ duration: 0.5, repeat: selectedLocation === 'current' ? Infinity : 0 }}
                            />
                            <span className="text-xs text-gray-900 font-medium">Downtown Plaza</span>
                          </motion.div>
                          
                          <motion.div 
                            className={`flex items-center gap-2 p-3 rounded-xl transition-all cursor-pointer ${
                              selectedLocation === 'destination' ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50'
                            }`}
                            onClick={() => setSelectedLocation('destination')}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-red-600 rounded-full"
                              animate={{ scale: selectedLocation === 'destination' ? [1, 1.3, 1] : 1 }}
                              transition={{ duration: 0.5, repeat: selectedLocation === 'destination' ? Infinity : 0 }}
                            />
                            <span className="text-xs text-gray-600">Airport Terminal</span>
                          </motion.div>
                        </div>
                        
                        {/* Quick Actions - Reduced padding */}
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <motion.button 
                            className={`p-3 rounded-xl text-xs text-gray-900 font-bold transition-all ${
                              selectedLocation === 'home' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => setSelectedLocation('home')}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            🏠 Home
                          </motion.button>
                          
                          <motion.button 
                            className={`p-3 rounded-xl text-xs text-gray-900 font-bold transition-all ${
                              selectedLocation === 'work' ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => setSelectedLocation('work')}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            💼 Work
                          </motion.button>
                        </div>
                        
                        {/* Ride Options - Compact */}
                        <div className="space-y-2 mb-2">
                          <motion.div 
                            className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                            whileHover={{ scale: 1.01, backgroundColor: '#f9fafb' }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                                🚗
                              </div>
                              <div>
                                <div className="text-xs font-bold text-gray-900">Economy</div>
                                <div className="text-xs text-gray-500">2 min</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-gray-400" />
                              <span className="text-xs font-bold text-gray-900">$12</span>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="flex items-center justify-between p-3 bg-red-500/5 rounded-xl border border-red-500/20"
                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-sm">
                                🚘
                              </div>
                              <div>
                                <div className="text-xs font-bold text-gray-900">Premium</div>
                                <div className="text-xs text-red-600">4 min</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span className="text-xs font-bold text-red-600">$24</span>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Book Button */}
                        <motion.button
                          className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                            isBookingActive 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl'
                          }`}
                          onClick={handleBookRide}
                          whileHover={!isBookingActive ? { scale: 1.02, y: -2 } : {}}
                          whileTap={!isBookingActive ? { scale: 0.98 } : {}}
                          disabled={isBookingActive}
                        >
                          {isBookingActive ? (
                            <motion.div 
                              className="flex items-center justify-center gap-2"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Booking...
                            </motion.div>
                          ) : (
                            <span>Book Premium Ride</span>
                          )}
                        </motion.button>
                        
                        {/* Bottom padding to account for home indicator */}
                        <div className="h-8" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-white/30 rounded-full" />
              </div>
              
              {/* Floating Animation Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-20"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div
                className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-15"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
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
        <div className="text-xs text-gray-400 font-medium">Scroll to explore</div>
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
        <motion.div
          className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;