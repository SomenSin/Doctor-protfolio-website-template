import React from 'react';
import { doctorData } from '../doctorData';

const StickyHeader = () => {
  const { hero } = doctorData;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-serif text-2xl font-bold text-primary">{hero.name}</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-primary transition-colors font-medium">About</button>
            <button onClick={() => scrollTo('services')} className="text-slate-600 hover:text-primary transition-colors font-medium">Services</button>
            <button onClick={() => scrollTo('experience')} className="text-slate-600 hover:text-primary transition-colors font-medium">Experience</button>
            <button onClick={() => scrollTo('reviews')} className="text-slate-600 hover:text-primary transition-colors font-medium">Reviews</button>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-soft"
            >
              {hero.ctaText}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
