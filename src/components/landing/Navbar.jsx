import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Courses', path: '/course' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white mt-6 w-full z-50 top-6 ">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center ">
              {/* <img src="/logo.png" alt="DevSentinel Logo" className="h-8 w-auto" /> */}
              <span className="text-2xl font-bold text-btn1">DevSentinel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden px-6 md:flex rounded-4xl bg-btn2 border-[#DBDBDB] border-1 items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition duration-300
                  ${location.pathname === link.path
                    ? 'text-black'
                    : 'text-[#344054] hover:text-black'
                  }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2focus:ring-offset-2"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-btn2 rounded-4xl mt-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`block px-3 py-2 text-sm font-medium transition duration-300
                  ${location.pathname === link.path
                    ? 'text-black'
                    : 'text-[#344054] hover:text-black'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;