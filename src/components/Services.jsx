import React from 'react';
import { doctorData } from '../doctorData';
import * as Icons from 'lucide-react';

const IconComponent = ({ name, ...props }) => {
  const Icon = Icons[name];
  if (!Icon) return <Icons.Activity {...props} />;
  return <Icon {...props} />;
};

const Services = () => {
  const { services } = doctorData;

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Services & Specializations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#F0F8FF] rounded-xl p-8 text-center shadow-soft hover:shadow-lg transition-shadow duration-300 border border-white"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
                <IconComponent name={service.icon} size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
