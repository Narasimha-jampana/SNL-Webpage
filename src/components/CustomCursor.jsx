import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth <= 768) return;
    
    setIsVisible(true);

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      const interactiveElements = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT'];
      if (
        interactiveElements.includes(e.target.tagName) ||
        e.target.closest('button') || 
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.8,
      backgroundColor: 'rgba(45, 212, 191, 0.4)', // Teal glow
      border: '1px solid rgba(45, 212, 191, 0.8)'
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: 'rgba(59, 130, 246, 0.5)', // Blue glow
        pointerEvents: 'none',
        zIndex: 9999,
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
      }}
    />
  );
}
