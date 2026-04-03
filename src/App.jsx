import React from 'react';
import StickyHeader from './components/StickyHeader';
import HeroSection from './components/HeroSection';
import AboutPhilosophy from './components/AboutPhilosophy';
import Services from './components/Services';
import ProfessionalJourney from './components/ProfessionalJourney';
import ReviewsCarousel from './components/ReviewsCarousel';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20">
      <StickyHeader />
      
      <main>
        <HeroSection />
        <AboutPhilosophy />
        <Services />
        <ProfessionalJourney />
        <ReviewsCarousel />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
