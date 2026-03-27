import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  { text: "Communication is the essence of human life.", author: "Janice Light" },
  { text: "Your voice is your identity. Let us help you find it.", author: "Sanjay Kumar" },
  { text: "Hearing brings you closer to the people you love.", author: "Anonymous" }
];

export default function Quotations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="quotations-section" style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(8, 12, 22, 0.9))',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'relative', 
      zIndex: 10,
      overflow: 'hidden'
    }}>
      {/* Decorative background circle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <Quote size={48} className="text-gradient-primary" style={{ opacity: 0.5 }} />
        </motion.div>

        <div style={{ height: '160px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ position: 'absolute', width: '100%', maxWidth: '800px', margin: '0 auto' }}
            >
              <h3 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '300', 
                lineHeight: '1.4', 
                marginBottom: '1.5rem',
                color: 'var(--text-main)',
                fontStyle: 'italic'
              }}>
                "{quotes[currentIndex].text}"
              </h3>
              <p className="text-muted" style={{ fontSize: '1.2rem', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase' }}>
                — {quotes[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
