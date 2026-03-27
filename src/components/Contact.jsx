import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

export default function Contact() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="section bg-darker">
      <div className="section-header text-center">
        <h2>Reach <span className="text-gradient">Me!</span></h2>
        <p>Sanjay Speech Hearing and Rehabilitation Center</p>
      </div>

      <div className="contact-grid mt-8" style={{ alignItems: 'stretch' }}>
        {/* Left Column: Contact Methods */}
        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Prominent Phone */}
          <motion.div className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(0, 240, 255, 0.2)', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(0,0,0,0) 100%)' }} variants={itemVariants}>
            <div className="icon-container" style={{ background: 'rgba(0, 240, 255, 0.15)' }}>
              <Phone size={24} color="#00f0ff" />
            </div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Direct Line</h3>
            <p style={{ color: 'var(--text)', fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              +91-7204945931
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
              Office: 080-42041980
            </p>
          </motion.div>

          {/* Address */}
          <motion.div className="glass-panel" style={{ padding: '2rem' }} variants={itemVariants}>
            <div className="icon-container">
              <MapPin size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Clinic Address</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Sanjay Speech Hearing and Rehabilitation Center</strong><br />
              <span style={{ fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.9 }}>(A venture of an AIIMS Delhi Alumnus)</span><br /><br />
              # 363 SSA Road, Near Sumangali Seva Aashram,<br />
              Behind Hebbal Police Station Cholanyakanahalli,<br />
              R.T.Nagar Post, Bangalore - 560032
            </p>
          </motion.div>

          {/* Hours & Email (Stacked for perfect fit) */}
          <motion.div className="glass-panel" style={{ padding: '2rem' }} variants={itemVariants}>
            <div className="icon-container">
              <Clock size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Office Hours</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              <strong>Monday - Friday:</strong> 10:00 AM - 7:30 PM
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <strong>Saturday:</strong> 10:00 AM - 5:30 PM
            </p>
            <div style={{ fontSize: '0.85rem', color: '#fbbf24', background: 'rgba(251, 191, 36, 0.1)', padding: '0.5rem 1rem', borderRadius: '8px', display: 'inline-block' }}>
              Prior Appointment Only
            </div>
          </motion.div>

          <motion.div className="glass-panel" style={{ padding: '2rem' }} variants={itemVariants}>
            <div className="icon-container">
              <Mail size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>E-mail</h3>
            <a href="mailto:sanjayslp_aiimsgrad@yahoo.co.in" style={{ color: 'var(--primary)', fontSize: '0.95rem', textDecoration: 'none', wordBreak: 'break-all', display: 'block', marginTop: '0.5rem' }}>
              sanjayslp_aiimsgrad@yahoo.co.in
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Google Map Embed */}
        <motion.div 
          className="glass-panel" 
          style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', alignSelf: 'stretch', minHeight: '600px', overflow: 'hidden' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ padding: '1.5rem', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Map size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Locate Us</h2>
          </div>
          <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', background: '#1a1a1a', position: 'relative', minHeight: '400px' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Sanjay%20Speech%20Hearing%20and%20Rehabilitation%20Center,%20SSA%20Road,%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
