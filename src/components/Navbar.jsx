import React from 'react';
import logo from '../assets/psyduck-removebg.png'; 

const Navbar = () => {
  return (
    <nav className="px-6 py-4  flex items-center justify-between bg-white dark:bg-gray-900 shadow-md max-w-6xl mx-auto px-6 py-20">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">Development Services</span>
      </div>

      {/* Navigation links (right side) */}
      <div className="space-x-4 hidden md:flex">
        <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Home</a>
        <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">About</a>
        <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Skills</a>
        <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
