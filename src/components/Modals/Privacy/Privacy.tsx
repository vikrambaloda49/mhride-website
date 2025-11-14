import React, { useState } from 'react';
import { Shield, Calendar, MapPin, Mail,} from 'lucide-react';
import {
  PrivacyData,
  lastUpdated,
  effectiveDate,
  companyInfo,
  type PrivacySection,
} from "@/data/privacy";

const privacyData: PrivacySection[] = PrivacyData;

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Terms styling */}
      <div className="bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-32 relative z-10">
          <div className="text-center">
            {/* Big typography matching Terms style */}
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              PRIVACY
              <br />
              <span className="text-red-600 relative">
                POLICY
                <div className="absolute -bottom-2 left-0 h-2 bg-red-500/20 w-full rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              How we protect and handle your personal information in compliance with <span className="text-red-600 font-medium">Canadian privacy laws</span>
            </p>
            
            {/* Info cards with similar styling to Terms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div className="group">
                <div className="flex justify-center mb-4 p-4 bg-blue-50 rounded-2xl w-fit mx-auto group-hover:bg-blue-100 transition-colors">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Last Updated</p>
                <p className="text-2xl font-black text-gray-900">{lastUpdated}</p>
              </div>
              
              <div className="group">
                <div className="flex justify-center mb-4 p-4 bg-red-50 rounded-2xl w-fit mx-auto group-hover:bg-red-100 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Effective Date</p>
                <p className="text-2xl font-black text-gray-900">{effectiveDate}</p>
              </div>
              
              <div className="group">
                <div className="flex justify-center mb-4 p-4 bg-green-50 rounded-2xl w-fit mx-auto group-hover:bg-green-100 transition-colors">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Jurisdiction</p>
                <p className="text-2xl font-black text-gray-900">Alberta, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        
        {/* Table of Contents */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-12 text-center">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {privacyData.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 group ${
                    activeSection === section.id
                      ? 'bg-red-600 text-white shadow-lg transform -translate-y-1'
                      : 'text-gray-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-black ${
                      activeSection === section.id ? 'text-white' : 'text-gray-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-bold group-hover:text-current">
                      {section.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-16">
          {privacyData.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-8">
              
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-6xl lg:text-7xl font-black text-red-600/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
              </div>
              
              {/* Main Content */}
              <div className="space-y-8">
                {section.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
                
                {/* Subsections */}
                {section.subsections && (
                  <div className="space-y-12 mt-12 pl-8 border-l-4 border-red-100">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                          {subsection.title}
                        </h3>
                        <div className="space-y-6">
                          {subsection.content.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex} className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Contact Section - Similar to Terms CTA style */}
      <div className="bg-gray-900 text-white py-20 lg:py-32 relative overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight">
            Privacy Questions
            <br />
            <span className="text-red-500">or Concerns?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-gray-300 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
            Contact our privacy team or file a complaint with Canadian privacy authorities
          </p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="group">
              <div className="flex justify-center mb-4 p-4 bg-red-600/10 rounded-2xl w-fit mx-auto group-hover:bg-red-600/20 transition-colors">
                <Mail className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Privacy Officer</p>
              <a 
                href={`mailto:${companyInfo.privacyOfficer}`} 
                className="text-xl font-bold hover:text-red-400 transition-colors"
              >
                {companyInfo.privacyOfficer}
              </a>
            </div>
            
            
            <div className="group">
              <div className="flex justify-center mb-4 p-4 bg-green-600/10 rounded-2xl w-fit mx-auto group-hover:bg-green-600/20 transition-colors">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Registered Office</p>
              <p className="text-xl font-bold">{companyInfo.registeredOffice}</p>
            </div>
          </div>
          
          {/* Privacy Commissioners */}
          <div className="mb-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Canadian Privacy Authorities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Federal</p>
                <p className="text-lg font-semibold text-white">Privacy Commissioner of Canada</p>
                <p className="text-gray-300">1-800-282-1376 | priv.gc.ca</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Alberta</p>
                <p className="text-lg font-semibold text-white">Information & Privacy Commissioner</p>
                <p className="text-gray-300">1-888-878-4044 | oipc.ab.ca</p>
              </div>
            </div>
          </div>
          
          {/* Company Info */}
          <div className="pt-12 border-t border-gray-800">
            <p className="text-xl text-gray-400 font-light">
              {companyInfo.name} • {companyInfo.registeredOffice} • {companyInfo.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;