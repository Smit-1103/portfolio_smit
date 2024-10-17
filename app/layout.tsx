'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>Smit Patel's Portfolio</title>
        <meta
          name="description"
          content="Welcome to Smit Patel's portfolio. Explore my work and skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="overflow-x-hidden">
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Header */}
          <header className="w-full py-3 bg-white/30 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
            <nav className="w-full flex justify-between items-center px-4 md:px-6">
              {/* Logo */}
              <a href="/" className="text-4xl font-semibold text-gray-900 tracking-tight">
                Smit Patel
              </a>

              {/* Mobile Menu Button */}
              <button
                className="text-gray-900 md:hidden"
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8">
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

            {/* Mobile Navigation Links */}
            <div
              className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-md transition-transform transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`}
              style={{ height: isOpen ? 'auto' : '0', overflow: 'hidden' }}
            >
              <div className="flex flex-col items-center space-y-4 pt-4 pb-4">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="container mx-auto px-4 md:px-6">{children}</main>

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
