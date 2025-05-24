import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import React from 'react';  
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Service from '../components/Services';
  
import '../index.css'; // Ensure you have Tailwind CSS set up

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Service />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
