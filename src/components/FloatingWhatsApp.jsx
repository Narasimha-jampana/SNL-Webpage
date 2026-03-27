import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a 
      href="https://wa.me/919900295717"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        cursor: 'pointer'
      }}
    >
      <MessageCircle size={36} />
      
      {/* Pulse effect */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '50%',
          border: '2px solid #25D366',
          zIndex: -1
        }}
      />
    </motion.a>
  );
}
