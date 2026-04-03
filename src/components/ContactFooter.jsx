import React, { useState } from 'react';
import { doctorData } from '../doctorData';
import { Mail, Phone, Send } from 'lucide-react';

const ContactFooter = () => {
  const { contact } = doctorData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit action
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-slate-900 border-t-8 border-primary text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Ready to Consult?
            </h2>
            <p className="text-slate-400 mb-10 max-w-md text-lg">
              Reach out via email or phone. We ensure all patient inquiries are handled with the highest confidentiality.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${contact.email}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mr-5 group-hover:bg-primary transition-colors text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-slate-500 mb-1">Email directly</span>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">{contact.email}</span>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mr-5 group-hover:bg-primary transition-colors text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-slate-500 mb-1">Call clinic</span>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">{contact.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="sr-only" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Full Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  placeholder="How can we help you?" 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {doctorData.hero.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
