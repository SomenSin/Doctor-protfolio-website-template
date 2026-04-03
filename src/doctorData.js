export const doctorData = {
  profileType: "experienced", // Can be "fresher" or "experienced"
  hero: {
    name: "Dr. Jonathan Smith",
    specialty: "General Surgeon",
    tagline: "Compassionate Care, Proven Expertise.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    stats: ["Board Certified", "Academic Gold Medalist", "Fellowship Trained"], // Maps to the stats bar
    ctaText: "Consult Now"
  },
  about: {
    bio: "Dedicated to providing advanced surgical care with a focus on patient recovery and well-being. My philosophy revolves around empathetic, patient-first treatment. Every patient is treated with the utmost respect and dedication to ensuring the best possible outcomes using state-of-the-art minimally invasive techniques.",
  },
  professionalJourney: {
    // For "experienced" profiles
    experience: [
      { role: "Head of Surgery", institution: "City Hospital", years: "2018 - Present" },
      { role: "Senior Consultant", institution: "Metro Medical", years: "2010 - 2018" }
    ],
    publications: ["Journal of Surgery", "Medical Times"],
    // For "fresher" profiles
    academicHighlights: [
      { achievement: "Residency Highlights", detail: "University of Medicine" },
      { achievement: "Specialized Fellowship", detail: "Minimally Invasive Surgery" }
    ],
    certifications: ["Academic Gold Medalist", "Board Certified Surgeon"]
  },
  services: [
    { title: "General Surgery", description: "Comprehensive surgical care and consultations covering a wide range of procedures.", icon: "Stethoscope" },
    { title: "Laparoscopic Procedures", description: "Minimally invasive procedures designed for faster recovery and less post-operative discomfort.", icon: "Activity" },
    { title: "Appendectomy", description: "Expert management and swift treatment of acute surgical emergencies like appendicitis.", icon: "ShieldAlert" }
  ],
  reviews: [
    { patientName: "A. Sharma", rating: 5, comment: "Exceptional care and very clear communication before my procedure. Highly compliant." },
    { patientName: "R. Gupta", rating: 5, comment: "Highly skilled surgeon. The recovery was exactly as explained." },
    { patientName: "M. Lopez", rating: 5, comment: "The entire team was incredibly supportive. I felt safe throughout my stay." },
  ],
  contact: {
    email: "consult@drsmithsurgery.com",
    phone: "+91-0000000000"
  }
};
