'use client'; // Add this at the top of your component file

import React from 'react';
import { Link } from 'react-scroll';
import './styles/globals.css';

// Define the RootLayout component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head >
        <title>Smit Patel's Portfolio</title>
        <meta
          name="description"
          content="Welcome to Smit Patel's portfolio. Explore my work and skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Header */}
          <header className="w-full py-3 bg-white/30 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
            <nav className="container mx-auto flex justify-between items-center px-6">
              {/* Logo */}
              <a href="/" className="text-4xl font-semibold text-gray-900 tracking-tight">
                Smit Patel
              </a>
              
              {/* Navigation Links */}
              <div className="space-x-8">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          {/* Main content */}
          {children}

          {/* Footer */}
          <footer className="bg-black">
            <div className="container mx-auto text-center text-white">
              <p className="text-sm">&copy; 2024 Smit Patel. All rights reserved.</p>
              <div className="space-x-6 mt-4">
                <a
                  href="https://github.com/Smit-1103/"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/smit-patel-34848a210/"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
