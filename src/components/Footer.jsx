import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div className="footer-brand" style={{ textAlign: 'left' }}>
          <h3 className="text-xl font-bold mb-2">SLP Sanjay Kumar</h3>
          <p className="text-muted" style={{ maxWidth: '300px' }}>Speech Language Pathologist, Voice Therapist & Audiologist based in Bangalore.</p>
        </div>
        
        <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home" className="hover-text-primary">Home</a>
          <a href="#services" className="hover-text-primary">Services</a>
          <a href="#videos" className="hover-text-primary">Case Studies</a>
          <a href="#contact" className="hover-text-primary">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom mt-8" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
        <p>Copyright © 2010 - {new Date().getFullYear()} speechtherapyindia.in. All Rights Reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>Developed with <span style={{color: 'var(--primary)'}}>AntiGravity</span></p>
      </div>
    </footer>
  );
}
