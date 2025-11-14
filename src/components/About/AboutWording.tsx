import React from 'react';
import { Users, Smartphone } from 'lucide-react';

const AboutWording: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-none aspect-square bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-32 h-32 lg:w-40 lg:h-40 text-white" />
              </div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;re revolutionizing urban transportation by connecting riders with premium vehicles and professional drivers through innovative technology.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make every journey safe, comfortable, and seamless while building stronger communities through reliable transportation.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                From daily commutes to special occasions, we&apos;re here to get you where you need to go with style and dependability.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Happy Riders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
            </div>

        

            {/* Call to Action */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Ready to ride?</div>
                <div className="text-sm text-gray-600">Download our app today</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutWording;