import React from 'react';
import { Shield, Sparkles, UserCheck, Clock, Award, type LucideIcon } from 'lucide-react';

interface Commitment {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

const commitments: Commitment[] = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your security is our top priority with comprehensive safety measures on every journey.",
    features: ["Real-time GPS tracking", "Emergency assistance", "Verified drivers", "Full insurance coverage"],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Sparkles,
    title: "Premium Vehicles",
    description: "Experience comfort and cleanliness with our well-maintained, professionally cleaned fleet.",
    features: ["Professional cleaning", "Regular maintenance", "Premium amenities", "Quality assurance"],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: UserCheck,
    title: "Trusted Drivers",
    description: "Professional drivers who undergo thorough screening and continuous training programs.",
    features: ["Background verification", "Professional training", "Regular assessments", "Customer feedback"],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Count on punctual pickups and efficient service with transparent communication.",
    features: ["On-time guarantee", "Real-time updates", "Route optimization", "24/7 support"],
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const Commitment: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Award className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We&apos;re dedicated to providing exceptional service through safety, reliability, and comfort. Every aspect of our service reflects these core values.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-1 w-16 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${commitment.bgColor} p-3 rounded-xl`}>
                    <IconComponent className={`w-6 h-6 ${commitment.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {commitment.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {commitment.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {commitment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Commitment;