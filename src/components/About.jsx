import React from 'react';
import profileImg from '../assets/about.jpg';



function About() {
  return (
    <section
      id="about"
      className="h-screen max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left: Text */}
      <div className="md:w-1/2">
        <h2 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
         I’m Pranav Panchwatkar, a web designer based in Nagpur skilled in UI/UX design, responsive layouts, and creating interactive digital experiences using modern web technologies.
        </p>
        {/* <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          With experience in React, Tailwind CSS, and modern JavaScript tools, I create responsive
          websites that perform well on all devices.
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          When I’m not coding, I enjoy reading tech blogs, playing games, and exploring new frameworks.
        </p> */}
        <button
            type="button"
            onClick={() => window.location.href = '/about'}
            
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            More About Me
          </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center">
        {/* <img
          src={profileImg}
          alt="About"
          className="rounded-xl w-72 h-72 object-cover shadow-lg border-4 border-blue-500"
        /> */}
      </div>
    </section>
  );
}

export default About;
