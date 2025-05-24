import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, } from 'react-icons/si'; 



    const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];



function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Tech Stack</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
