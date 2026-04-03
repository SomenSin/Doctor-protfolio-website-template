import React from 'react';
import { doctorData } from '../doctorData';

const HeroSection = () => {
  const { hero } = doctorData;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-secondary pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              {hero.specialty}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              {hero.tagline}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {hero.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg text-lg"
              >
                {hero.ctaText}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-white">
              <img 
                src={hero.image} 
                alt={hero.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>
          
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 bg-white py-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex items-center text-slate-700 font-medium text-lg">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
