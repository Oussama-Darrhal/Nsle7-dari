import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-beige-50 text-gray-700'} mt-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and description */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <Link to="/" className={`font-bold text-xl mb-4 inline-block ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
              Nsle7 Dari
            </Link>
            <p className="mt-2">Your trusted partner for home repair and maintenance services.</p>
          </div>
          
          {/* Nav Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`hover:${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={`hover:${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className={`hover:${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`hover:${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@nslehdari.com</li>
              <li>Phone: +212 123 456 789</li>
              <li>Address: 123 Main St, Casablanca, Morocco</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} no-underline`}>
                Facebook
              </a>
              <a href="#" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} no-underline`}>
                Twitter
              </a>
              <a href="#" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} no-underline`}>
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 ${darkMode ? 'border-t border-gray-700' : 'border-t border-beige-200'} text-center`}>
          <p>&copy; {new Date().getFullYear()} Nsle7 Dari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
