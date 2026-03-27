import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Stats from './components/Stats';
import Quotations from './components/Quotations';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <FloatingWhatsApp />
      <div className="animated-bg"></div>
      
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <Stats />
        <Process />

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="videos">
          <Videos />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <Quotations />
        <FAQ />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
