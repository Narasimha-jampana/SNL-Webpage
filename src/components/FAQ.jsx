import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { 
    question: "How long does speech therapy typically take?", 
    answer: "Therapy duration varies completely by individual needs. Some clients see results in a few weeks, while complex cases require longer-term commitment to rewire neural pathways." 
  },
  { 
    question: "Do you offer online sessions (Telerehabilitation)?", 
    answer: "Yes! We offer state-of-the-art secure online therapy sessions for patients nationwide, ensuring you get world-class care from the comfort of your home." 
  },
  { 
    question: "What ages do you treat?", 
    answer: "We treat individuals across the entire lifespan—from toddlers experiencing speech delays or autism to adults requiring voice refinement or post-stroke neurological rehabilitation." 
  },
  { 
    question: "Do I need a referral from a doctor to book?", 
    answer: "While a referral from an ENT or neurologist can provide helpful medical context, it is not strictly required to book an initial diagnostic consultation with us." 
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" style={{ padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title text-gradient-primary">Frequently Asked Questions</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Everything you need to know about starting your therapy journey.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel"
              style={{ marginBottom: '1rem', overflow: 'hidden' }}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                {activeIndex === index ? <ChevronUp size={24} className="text-primary" /> : <ChevronDown size={24} className="text-muted" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ 
                      padding: '0 2rem 1.5rem', 
                      color: 'var(--text-muted)',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      <p style={{ marginTop: '1rem' }}>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
