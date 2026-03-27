import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration * 1000 / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { id: 1, value: 5000, suffix: '+', label: 'Voices Restored' },
    { id: 2, value: 15, suffix: '+', label: 'Years Experience' },
    { id: 3, value: 99, suffix: '%', label: 'Success Rate' },
    { id: 4, value: 2, suffix: '', label: 'Prime Locations' }
  ];

  return (
    <section className="stats-section" style={{ padding: '6rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="stats-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem' 
        }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="glass-panel text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                padding: '2rem',
                borderTop: '2px solid var(--primary)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
              }}
            >
              <h2 className="text-gradient-primary" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
