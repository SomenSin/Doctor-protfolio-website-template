import React from 'react';
import { doctorData } from '../doctorData';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const ProfessionalJourney = () => {
  const { profileType, professionalJourney } = doctorData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            {profileType === 'experienced' ? 'Experience & Leadership' : 'Academic Highlights & Training'}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {profileType === 'experienced' ? (
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {professionalJourney.experience.map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Marker */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white shadow-soft border border-slate-100 group-hover:border-primary/20 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-primary mb-1">{exp.years}</span>
                        <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                        <p className="text-slate-600 mt-1">{exp.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/30 rounded-2xl p-8 border border-white shadow-soft">
                <div className="flex items-center mb-6 text-primary">
                  <BookOpen className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Publications</h3>
                </div>
                <ul className="space-y-4">
                  {professionalJourney.publications.map((pub, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0"></div>
                      <span className="text-slate-700 font-medium">{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Academic Highlights */}
            <div className="space-y-6">
              {professionalJourney.academicHighlights.map((item, index) => (
                <div key={index} className="flex bg-white shadow-soft rounded-xl p-6 border border-slate-100 hover:border-primary/20 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mr-4 shadow-inner">
                    <Award strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.achievement}</h3>
                    <p className="text-slate-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Box */}
            <div className="bg-primary text-white rounded-2xl p-10 shadow-xl border-4 border-secondary/20 relative overflow-hidden">
               {/* Decorative */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
               
               <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Certifications & Honors</h3>
               <ul className="space-y-5 relative z-10">
                 {professionalJourney.certifications.map((cert, index) => (
                   <li key={index} className="flex items-center text-blue-50">
                     <CheckCircle className="w-5 h-5 text-secondary mr-4 shrink-0" />
                     <span className="text-lg">{cert}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProfessionalJourney;
