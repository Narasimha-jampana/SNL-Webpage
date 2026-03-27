import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileSearch, HeartPulse, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={32} />,
    title: '1. Initial Consultation',
    desc: 'Reach out to schedule your first meeting. We listen to your concerns and understand your unique communication goals.'
  },
  {
    icon: <FileSearch size={32} />,
    title: '2. Clinical Assessment',
    desc: 'Our experts conduct a comprehensive, non-invasive evaluation using state-of-the-art diagnostic tools.'
  },
  {
    icon: <HeartPulse size={32} />,
    title: '3. Customized Therapy',
    desc: 'We design a tailored rehabilitation program featuring evidence-based exercises and techniques to heal and restore.'
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: '4. Ongoing Support',
    desc: 'Regular follow-ups and continuous support ensure long-lasting results and maintained progress.'
  }
];

export default function Process() {
  return (
    <section className="process-section" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title text-gradient-primary">How It Works</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A proven, four-step journey towards confident communication and better hearing.
          </p>
        </motion.div>

        <div className="process-timeline" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-panel text-center"
              style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}
            >
              <div 
                className="icon-container"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--primary)',
                  boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)'
                }}
              >
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                {step.title}
              </h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
