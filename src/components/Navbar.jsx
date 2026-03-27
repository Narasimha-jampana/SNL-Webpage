import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, PlayCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Reach me', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="text-gradient-primary">Sanjay</span> Speech Hearing
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <div className="nav-socials">
            <a href="#" className="social-icon"><Globe size={18} /></a>
            <a href="http://www.youtube.com/user/sanjay1774?feature=watch" className="social-icon"><PlayCircle size={18} /></a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu mobile-only"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-socials">
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="http://www.youtube.com/user/sanjay1774?feature=watch" className="social-icon"><PlayCircle size={20} /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
