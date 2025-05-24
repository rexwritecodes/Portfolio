import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Pranav Panchwatkar</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
