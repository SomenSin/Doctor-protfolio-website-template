import React from 'react';
import { doctorData } from '../doctorData';

const AboutPhilosophy = () => {
  const { about } = doctorData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
          About & Philosophy
        </h2>
        <div className="bg-secondary/30 p-8 md:p-12 rounded-2xl shadow-soft">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            "{about.bio}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
