import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Landing Page',
        description:
            'I design & build high-converting, visually compelling landing pages that capture attention and drive action.',
        features: [
            'Single page + 404 page',
            'Design + Development',
            'Fully responsive',
            'Animation + Interactions',
        ],
        delivery: '1 week delivery',
        price: 'Starting at ₹12999',
    },
    {
        title: 'Portfolio Website',
        description:
            'Custom personal portfolio to showcase your skills, experience, and projects with interactive elements.',
        features: ['Multi-page layout', 'Responsive design', 'Dark/light mode', 'Contact form integration'],
        delivery: '2 weeks delivery',
        price: 'Starting at ₹9999',
    },
    {
        title: 'App Development',
        description:
            'Design modern UI/UX for Applications, including components, flow.',
        features: ['Fast', 'Easy Navigation', 'Optimized Touch ', ],
        delivery: '4 weeks delivery',
        price: 'Starting at ₹25999',
    },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                {service.title}
              </h3>
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {expandedIndex === index ? '−' : '+'}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>

              <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">
                <span className="text-blue-500 font-semibold">{service.price}</span>
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">
                <span className="text-blue-500 font-semibold">{service.delivery}</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition"
                >
                  Get In Touch
                </a>
                <button>
                    <a
                        href="tel:+918806815135"
                        className="px-4 py-2 bg-green-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition"
                    >
                        Call Me
                    </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
