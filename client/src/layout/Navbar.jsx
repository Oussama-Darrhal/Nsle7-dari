import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check system preference for dark/light mode
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 border-b border-beige-200'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={`font-bold text-xl ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
              Nsle7 Dari
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/services" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/services') 
                    ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
                }`}
              >
                Services
              </Link>
              
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/about') 
                    ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
                }`}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/contact') 
                    ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/login" 
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${
                darkMode 
                  ? 'text-orange-400 hover:bg-gray-700' 
                  : 'text-orange-500 hover:bg-beige-50'
              }`}
            >
              Login
            </Link>
            
            <Link 
              to="/register" 
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${
                darkMode 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              Sign Up
            </Link>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
            
            <button
              onClick={toggleMenu}
              className={`ml-2 inline-flex items-center justify-center p-2 rounded-md ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-beige-50'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') 
                  ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
              }`}
            >
              Services
            </Link>
            
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? (darkMode ? 'bg-gray-900 text-orange-400' : 'bg-beige-50 text-orange-500') 
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-beige-50 hover:text-orange-500')
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="mt-3 px-2 space-y-1">
                <Link 
                  to="/login" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    darkMode ? 'text-orange-400 hover:bg-gray-700' : 'text-orange-500 hover:bg-beige-50'
                  }`}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    darkMode ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
