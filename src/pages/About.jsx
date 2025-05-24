import React from 'react';

const timelineData = [
  {
    year: '2020 - 2024',
    title: 'Bachelor of Computer Science',
    institution: 'ABC University',
    description: 'Studied software development, algorithms, and web technologies.',
  },
  {
    year: 'Summer 2023',
    title: 'Frontend Developer Intern',
    institution: 'Tech Corp',
    description: 'Worked on React-based web applications and improved UI components.',
  },
  {
    year: '2024 - Present',
    title: 'Full Stack Developer',
    institution: 'Innovate Solutions',
    description: 'Building scalable web apps with React and Node.js.',
  },
];

function About() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* About Me intro */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          Passionate developer turning ideas into reality. Skilled in React, Node.js, and modern web tech. Here’s a quick timeline of my education and professional journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8">
        {timelineData.map(({ year, title, institution, description }, idx) => (
          <div key={idx} className="mb-10 relative">
            {/* Circle */}
            <span className="absolute -left-5 top-1 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></span>
            {/* Content */}
            <div>
              <time className="text-sm font-semibold text-blue-600 dark:text-blue-400">{year}</time>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300">{institution}</h4>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
