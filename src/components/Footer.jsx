import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Name */}
        <div className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Pranav Panchwatkar. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/rexwritecodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-panchwatkar-7747a4341/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
