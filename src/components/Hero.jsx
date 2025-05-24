import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // Make sure this exists

function Hero() {
  return (
    <section className=" flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
      {/* Text Content */}
      <div className="md:w-1/2">
        <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="flex items-center justify-center md:justify-start gap-3 mb-2"
>
  {/* Green dot */}
<div
    className="w-3 h-3 rounded-full bg-[linear-gradient(to_right,#4ade80,#22c55e)] shadow-md animate-pulse"
  ></div>
  {/* Text */}
  <p className="text-white font-medium text-lg">Available for work</p>
</motion.div>
        {/* Heading */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Turning Ideas into engaging, High-Performance Websites & Apps.
        </motion.h1>

        {/* Availability line */}

        {/* Tagline */}
        {/* <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-6"
        >
          Turning ideas into engaging, high-performance websites & Apps.
        </motion.p> */}

        {/* Call To Action Button */}
        <motion.a
          href="#contact"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="md:w-1/2"
      >
        <img
          src={profileImage}
          alt="Pranav Profile"
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
