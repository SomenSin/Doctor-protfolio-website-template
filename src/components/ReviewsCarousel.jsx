import React from 'react';
import { doctorData } from '../doctorData';
import { Star } from 'lucide-react';

const ReviewsCarousel = () => {
  const { reviews } = doctorData;

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Patient Feedback
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-soft border border-slate-50 relative"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{review.comment}"
              </p>
              <div className="flex flex-col mt-auto">
                <span className="font-bold text-slate-900">— {review.patientName}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">Verified Patient</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsCarousel;
