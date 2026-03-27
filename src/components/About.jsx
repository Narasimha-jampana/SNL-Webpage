import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, GraduationCap, Building2, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About <span className="text-gradient">Me</span></h2>
        <p>SLP Sanjay Kumar - Speech and Hearing Specialist</p>
      </div>

      <div className="about-grid mt-12" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
          
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000}>
            <motion.div 
              className="glass-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '1rem', overflow: 'hidden' }}
            >
              <img 
                src="/sanjay-portrait.png" 
                alt="SLP Sanjay Kumar"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '12px', 
                  objectFit: 'cover', 
                  objectPosition: 'center top',
                  minHeight: '400px'
                }}
              />
            </motion.div>
          </Tilt>

          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={2000}>
            <motion.div 
              className="glass-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '3rem' }}
            >
          <div className="icon-container"><Award size={24} /></div>
          <h3>Professional Membership</h3>
          <ul className="custom-list mt-4">
            <li><Building2 size={16} className="text-primary" /> Life member of ISHA (Indian Speech & Hearing Association).</li>
            <li className="mt-3"><Building2 size={16} className="text-primary" /> Registered member of RCI (Rehabilitation Council of India).</li>
            <li className="mt-3"><Building2 size={16} className="text-primary" /> Certified Consultant Speech Language Pathologist / Audiologist.</li>
          </ul>
            </motion.div>
          </Tilt>
        </div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem', gridColumn: '1 / -1' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.4 }}
        >
          <div className="icon-container"><GraduationCap size={24} /></div>
          <h3>Qualifications</h3>
          <ul className="custom-list mt-4">
            <li><strong>B.Sc. (Hons) Speech and Hearing</strong><br/><span className="text-muted">AIIMS New Delhi, India</span></li>
            <li className="mt-4"><strong>M.Sc. Speech Language Pathology</strong><br/><span className="text-muted">All India Institute of Speech and Hearing (AIISH), Mysore, India</span></li>
          </ul>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem', gridColumn: '1 / -1' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.4 }}
        >
          <div className="icon-container"><MapPin size={24} /></div>
          <h3>Scientific Sessions & Continuing Education</h3>
          <ul className="custom-list-inline mt-4 text-muted">
            <li>Workshop on "Phonological Process Analysis" at AIISH</li>
            <li>Cochlear Implant & Temporal Bone Dissection by Batra Hospital</li>
            <li>National Seminar on Current Perspectives on Fluency Disorders</li>
            <li>Management of Autism by National Institute for the Mentally Handicapped</li>
            <li>Symposium on Modern Hearing Rehabilitation Technologies, New Delhi</li>
          </ul>
        </motion.div>
    </section>
  );
}
