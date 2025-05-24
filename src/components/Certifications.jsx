import React, { useState } from 'react';

const certifications = [
  {
    title: 'UI/UX Psychology',
    issuer: 'GUVI',
    year: '2024',
    link: 'https://www.guvi.in/verify-certificate?id=h1kuD3606Q417l2M74',
    description: 'Covers the principles of psychology behind UI/UX design and how to apply them in real-world applications.',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'LeWagon',
    year: '2024',
    link: 'https://app.lewagon.school/certificates/2qrtbomfnk',
    description: 'Focused on the foundations of user interface and experience design, with practical design tools.',
  },
];

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md transition hover:shadow-xl p-5"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {cert.issuer} — {cert.year}
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-xl">
                {expandedIndex === index ? '−' : '+'}
              </span>
            </div>

            {/* Expanded content */}
            <div
              className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-500 dark:text-blue-300 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
