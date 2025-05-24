import { link } from 'framer-motion/client';
import profilePic from '../assets/selfi.jpg';
import Services from '../components/Services';
import { useState } from 'react';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, } from 'react-icons/si'; 
import Contact from '../components/Contact';
import Footer from '../components/Footer';


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


// Sample data — you can update these with your real info
const timelineData = [
  {
    year: '2024 - Present',
    title: 'Bachelor of Computer Science',
    institution: 'Nagpur Institute of Technology',
    description: 'Studying software development, algorithms, and web technologies.',
  },
  {
    year: '2023 - Present',
    title: 'Freelance Developer',
    institution: 'Innovate Solutions',
    description: 'Building scalable web apps with React and Node.js.',
  },
  {
    year: 'Summer 2025',
    title: 'Frontend Developer Intern',
    institution: 'Prodigy Infotech',
    description: 'Worked on React-based web applications and improved UI components.',
  },
  {
    year: '2024',
    title: 'Graphics Designer',
    institution: 'Jainify',
    description: 'Designed graphics for social media campaigns.',
  },
  {
    year: '2020 - 2023',
    title: 'Computer Engineering Diploma',
    institution: 'Government Polytechnic, Hingoli',
    description: 'Studied various aspects of computer engineering, including programming, networking, and database management.',
  },
];

const certifications = [
  {
    title: 'UI/UX Psychology',
    issuer: 'GUVI',
    year: '2024',
    link: 'https://www.guvi.in/verify-certificate?id=h1kuD3606Q417l2M74',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'LeWagon',
    year: '2024',
    link: 'https://app.lewagon.school/certificates/2qrtbomfnk',
  },
];

const services = [
  'Web Development',
  'UI/UX Design',
  'SE',
  'App Development',
];

function About() {
  return (
    <section className="px-60 py-4  mx-auto p-8  bg-gray-900 rounded-lg shadow-lg text-gray-300">
      {/* Header & intro */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          About Me  
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Passionate developer turning ideas into reality. Skilled in React, Node.js, and modern web technologies. Here’s a quick timeline of my education and professional journey.
        </p>
      </div>

      {/* Timeline + Profile Image */}
      <div className="flex flex-col md:flex-row md:gap-16">
        {/* Timeline */}
        <div className="flex-1 border-l-4 border-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 pl-10">
          {timelineData.map(({ year, title, institution, description }, idx) => (
            <div key={idx} className="mb-14 relative last:mb-0">
              <span className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 shadow-lg border-4 border-gray-900 animate-pulse"></span>
              <div>
                <time className="text-sm font-semibold text-blue-400 tracking-wide">
                  {year}
                </time>
                <h3 className="text-2xl font-semibold text-white mt-1">{title}</h3>
                <h4 className="text-md font-medium text-gray-400 mt-0.5">{institution}</h4>
                <p className="text-gray-400 mt-2 leading-relaxed max-w-xl">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Image */}
        <div className="mt-12 md:mt-0 flex justify-center items-start">
          <img
            src={profilePic}
            alt="Pranav Jain"
            className="rounded-lg shadow-xl max-w-xs w-full object-cover border-4 border-blue-500"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
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
      </div>

      {/* Certifications */}
      <div className="py-20 px-6 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map(({ title, issuer, year, link }, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-lg shadow-lg border border-blue-600 hover:border-blue-400 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
              <p className="text-gray-400">{issuer}</p>
              <p className="text-gray-500 text-sm mt-1">{year}</p>
              <a className="text-green-700 text-sm mt-1" href={link}>View Certificate</a>
            </div>
          ))}
        </div>
      </div>
        <Services/>

        
      {/* Services */}
      {/* <div className="mt-20 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Services</h2>
        <ul className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <li
              key={i}
              className="bg-blue-700 bg-opacity-30 rounded-lg px-8 py-5 shadow-md text-blue-400 font-semibold text-center hover:bg-blue-600 cursor-default transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </div> */}

<Contact />
<Footer />
    </section>
  );
}

export default About;
