import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Plus } from 'lucide-react';

export default function Testimonials() {
  const [formData, setFormData] = useState({ name: '', email: '', website: '', comments: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Testimonial submitted successfully for clinical review!');
    setFormData({ name: '', email: '', website: '', comments: '' });
  };

  return (
    <section id="testimonials" className="section">
      <div className="section-header text-center">
        <h2>Patient <span className="text-gradient-primary">Testimonials</span></h2>
        <p>Stories of transformed lives and voices</p>
      </div>

      <div className="testimonials-grid mt-8">
        
        {/* Current Testimonials */}
        <motion.div 
          className="testimonials-list"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} className="text-fbbf24" style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <Star size={20} className="text-fbbf24" style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <Star size={20} className="text-fbbf24" style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <Star size={20} className="text-fbbf24" style={{ color: '#fbbf24', fill: '#fbbf24' }} />
              <Star size={20} className="text-fbbf24" style={{ color: '#fbbf24', fill: '#fbbf24' }} />
            </div>
            <p className="testimonial-text italic text-lg mb-6">
              "I am 47 years old and had been struggling with a high-pitched, female-sounding voice for the past 33 years. Over time, I had almost accepted that this was something I would have to live with permanently... Voice therapy was never suggested to me at that time... Gradually, I came to the conclusion that I would have to sustain this voice throughout my life until I found this clinic."
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg">
                R
              </div>
              <div>
                <h4 className="font-semibold text-lg">Rajesh Bussa</h4>
                <p className="text-sm text-muted">Voice Therapy Patient</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel mt-6 text-center" style={{ padding: '2rem' }}>
             <p className="text-muted">Viewing entries 1 through 10 (Total entries: 427)</p>
             <button className="btn btn-outline mt-4" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Load More</button>
          </div>
        </motion.div>

        {/* Add Testimonial Form */}
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem', alignSelf: 'start' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-container mb-0"><MessageSquare size={24} /></div>
            <h3 className="text-2xl m-0">Add Testimonial</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group mt-3">
              <label>E-Mail Address</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group mt-3">
              <label>Website URL (optional)</label>
              <input type="url" name="website" className="form-control" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Comments</label>
              <textarea name="comments" className="form-control" rows="4" value={formData.comments} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn w-full justify-center mt-6">
              <Plus size={18} /> Submit Story
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
