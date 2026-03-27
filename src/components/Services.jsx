import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Stethoscope, Headset, Baby, Ear, Mic2, Activity, BrainCircuit } from 'lucide-react';

export default function Services() {
  const disorders = [
    "Voice Disorders (Puberphonia, Functional Aphonia)",
    "Stuttering & Fluency Disorders",
    "Speech Sound Disorders / Articulation",
    "Autism Spectrum Disorders",
    "Hearing Loss & Audiological Rehabilitation",
    "Aphasia & Adult Language Disorders",
    "Delay in Speech and Language"
  ];

  const servicesTab = [
    {
      icon: <Activity size={28} />,
      title: "Clinical Services",
      desc: "State-of-the-art clinical assessments and therapeutic interventions utilizing the latest methodologies and equipment in speech-language pathology and audiology."
    },
    {
      icon: <Headset size={28} />, // Changed from ShieldCheck to Headset based on new imports
      title: "Telerehabilitation & Counseling",
      desc: "High-quality remote therapy sessions and expert counseling. Bringing professional care directly to your home using secure, interactive telerehab platforms."
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Diagnostic Evaluations",
      desc: "Comprehensive diagnostic evaluations for a wide range of speech, language, and hearing disorders, providing accurate assessments for personalized treatment plans."
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "Cognitive-Communication Therapy",
      desc: "Specialized therapy for cognitive-communication deficits resulting from stroke, traumatic brain injury, or neurological conditions, focusing on memory, attention, and problem-solving."
    },
    {
      icon: <Baby size={28} />,
      title: "Pediatric Speech Therapy",
      desc: "Early intervention and specialized therapy for children with speech and language delays, articulation disorders, and developmental communication challenges."
    },
    {
      icon: <Ear size={28} />,
      title: "Audiological Services",
      desc: "Hearing assessments, hearing aid fitting and management, and aural rehabilitation to improve communication for individuals with hearing loss."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="section-header text-center">
        <h2>Premium <span className="text-gradient-primary">Services</span></h2>
        <p>Comprehensive care for all speech and hearing needs</p>
      </div>

      <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {servicesTab.map((service, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-panel"
              style={{ height: '100%', padding: '2.5rem 2rem' }}
            >
              <div 
                className="icon-container"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
              >
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                {service.title}
              </h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                {service.desc}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <div className="mt-12 glass-panel" style={{ padding: '3rem' }}>
        <h3 className="text-2xl mb-6 text-center">Communication Disorders Treated</h3>
        <div className="disorders-list">
          {disorders.map((disorder, idx) => (
            <motion.div 
              key={idx} 
              className="disorder-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Mic2 size={16} className="text-primary" /> {disorder}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
