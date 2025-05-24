import React from 'react';
import Smart from '../assets/smart.jpg';
import Campus from '../assets/campus.jpg';
import Recipe from '../assets/1.png';
import Resume from '../assets/resume.png';


const projects = [
  {
    title: 'smarTour.ai',
    description: 'Smartour.ai is an AI-based travel planner offering personalized itineraries, chatbot support, and blogs to simplify and enhance travel experiences.',
    tech: ['HTML', 'JWT', 'Node.js', 'Express', 'MongoDB'],
    image: Smart,
    github: 'https://github.com/rexwritecodes/smarTour.ai',
    demo: 'https://smar-tour-ai-55in-q447ipw7l-pranavs-projects-41c646f2.vercel.app/',
  },
  {
    title: 'CampusEdege',
    description: 'CampusEdge is an innovative learning platform dedicated to empowering students with up-to-date knowledge and hands-on skills in trending technologies.',
    tech: ['Figma'],
    image: Campus,
    github: ' ',
    demo: ' ',
  },
  {
    title: 'GetRecipeWithAI',
    description: 'GetRecipeWithAi generates personalized recipes instantly using AI based on your available ingredients.',
    tech: ['Node', 'Gemini API', ],
    image: Recipe,
    github: 'https://github.com/your-username/weather-app',
    demo: 'https://your-weather-demo.vercel.app',
  },
  {
    title: 'ResumeBuilderWithAi',
    description: 'ResumeBuilderWithAi helps you create a professional resume in minutes using AI.',
    tech: ['Node', 'Gemini API', ],
    image: Resume,
    github: '',
    demo: 'https://resume-builder-ai-by-rex.netlify.app/',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
                  {project.title}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded dark:bg-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
