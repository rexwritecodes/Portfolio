import Navbar from './components/Navbar';
import Hero from './components/Hero';
import React from 'react';  
import About from './components/About';
// import Skills from './components/Skills';
  
import './index.css'; // Ensure you have Tailwind CSS set up

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
