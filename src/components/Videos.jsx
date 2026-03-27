import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Videos() {
  const cases = [
    {
      title: "Functional Aphonia",
      before: "https://www.youtube.com/embed/KlMGuKp3-yw",
      after: "https://www.youtube.com/embed/qoZGn_sKgC4",
    },
    {
      title: "Puberphonia (Persistent High Pitched Male Voice)",
      before: "https://www.youtube.com/embed/NuXBSaGEI9Q",
      after: "https://www.youtube.com/embed/c1CmWlk_1as",
    }
  ];

  return (
    <section id="videos" className="section">
      <div className="section-header text-center">
        <h2>Case <span className="text-gradient">Studies</span></h2>
        <p>Before & After Treatment Showcases</p>
      </div>

      <div className="videos-container mt-8">
        {cases.map((study, idx) => (
          <motion.div 
            key={idx} 
            className="glass-panel case-study"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-center text-primary">{study.title}</h3>
            <div className="video-grid">
              
              <div className="video-wrapper">
                <div className="video-label before">Before Treatment</div>
                <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={study.before} 
                    title={`${study.title} Before`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>

              <div className="video-wrapper">
                <div className="video-label after">After Treatment</div>
                <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10 shadow-lg" style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={study.after} 
                    title={`${study.title} After`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
        
        <div className="text-center mt-8">
          <a href="http://www.youtube.com/user/sanjay1774?feature=watch" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Play size={18} /> Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
