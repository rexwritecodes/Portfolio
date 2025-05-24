import React from 'react';
import profileImg from '../assets/selfi.jpg'; // Adjust the path as necessary



function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20" id="home">
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          A Passionate Web Developer
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          I build responsive and modern web applications with clean UI and great UX.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            Contact Me
          </a>
          <a href="/resume.pdf" download className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full w-60 h-60 object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
