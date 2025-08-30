import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx'

export default function App() {
  return (
    <div data-theme="advaithTheme" className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
