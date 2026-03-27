import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="hero-section hero-fullpage"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(8, 12, 22, 0.9) 0%, rgba(8, 12, 22, 0.4) 50%, rgba(8, 12, 22, 0.1) 100%), url('/doctor-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-badge">An AIIMS New Delhi & AIISH Mysore Alumnus</span>
        <h1 className="hero-title mt-4">
          <span className="text-gradient-primary">SLP Sanjay Kumar</span>
        </h1>
        <h2 className="hero-subtitle mt-2 text-white">
          Speech Language Pathologist | Voice Therapist | Audiologist
        </h2>
        <p className="hero-desc mt-4">
          Empowering voices and restoring hearing with world-class clinical care, telerehabilitation, and counseling.
        </p>
        <div className="hero-actions mt-8">
          <a href="#contact" className="btn">
            <Calendar size={18} /> Book Appointment
          </a>
          <a href="#about" className="btn btn-outline" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
