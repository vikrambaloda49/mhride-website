'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { testimonials, stats } from '@/data/testimonials';
import { Testimonial } from '@/data/testimonials';




const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const featured = testimonials.filter(t => t.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);

  const current = featured[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="text-brand-red font-semibold mb-3">Customer Stories</div>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-4">
            Loved by <span className="text-brand-red">Thousands</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          {[
            { label: 'Total Rides', value: stats.totalRides },
            { label: 'Happy Customers', value: stats.happyCustomers },
            { label: 'Average Rating', value: stats.averageRating },
            { label: 'Cities Covered', value: `${stats.citiesCovered}+` },
          ].map((item) => (
            <div key={item.label} className="p-6 bg-gray-50 rounded-2xl text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-gray-500 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div 
          className="relative max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg text-gray-800 mb-6">“{current.testimonial}”</p>
              <div className="flex items-center justify-center gap-4">
                {/* <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                /> */}
                <h1>MH</h1>
                <div>
                  <h4 className="font-bold text-gray-900">{current.name}</h4>
                  <p className="text-sm text-gray-600">{current.company}</p>
                </div>
                {current.verified && (
                  <Shield className="w-5 h-5 text-green-500" />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* All Testimonials */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          {testimonials.slice(0, 6).map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedTestimonial(t)}
              className="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-white hover:shadow-lg transition"
            >
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">“{t.testimonial}”</p>
              <div className="flex items-center gap-3">
                <h1>MH</h1>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl max-w-md w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-3">{selectedTestimonial.name}</h3>
              <p className="text-gray-700 mb-4">“{selectedTestimonial.testimonial}”</p>
              <button
                className="mt-2 bg-brand-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 w-full"
                onClick={() => setSelectedTestimonial(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
