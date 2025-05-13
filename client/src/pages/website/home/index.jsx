import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

// Style object to remove underlines
const linkStyle = {
  textDecoration: 'none'
};

const Home = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? 'text-white' : 'text-gray-900'}>
      {/* Hero Section */}
      <section className={`py-8 px-4 ${darkMode ? 'bg-gray-800' : 'bg-beige-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className={`absolute right-4 top-0 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-orange-400' : 'bg-beige-100 text-orange-500'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
              Professional Home Repair Services
            </h1>
            <p className="max-w-md mx-auto mt-2 no-underline">
              We provide quality repair and maintenance services for your home. Fast, reliable, and professional.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link 
                to="/services" 
                className={`px-4 py-2 rounded-md ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} text-white no-underline`}
                style={linkStyle}
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-md ${darkMode ? 'border border-orange-400 text-orange-400 hover:bg-gray-700' : 'border border-orange-500 text-orange-500 hover:bg-beige-100'} no-underline`}
                style={linkStyle}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-8 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-xl font-bold text-center ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4 mt-6">
            {/* Service Card 1 */}
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-beige-50'} flex-1`}>
              <h3 className={`font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>Plumbing</h3>
              <p className="mt-1 no-underline">Expert plumbing services for all your needs, from repairs to installations.</p>
              <Link to="/services/plumbing" className={`${darkMode ? 'text-orange-400' : 'text-orange-500'} font-medium mt-2 inline-block no-underline`} style={linkStyle}>
                Learn More →
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-beige-50'} flex-1`}>
              <h3 className={`font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>Electrical</h3>
              <p className="mt-1 no-underline">Safe and reliable electrical services for your home or business.</p>
              <Link to="/services/electrical" className={`${darkMode ? 'text-orange-400' : 'text-orange-500'} font-medium mt-2 inline-block no-underline`} style={linkStyle}>
                Learn More →
              </Link>
            </div>
            
            {/* Service Card 3 */}
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-beige-50'} flex-1`}>
              <h3 className={`font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>Carpentry</h3>
              <p className="mt-1 no-underline">Quality carpentry work for repairs, renovations, and custom projects.</p>
              <Link to="/services/carpentry" className={`${darkMode ? 'text-orange-400' : 'text-orange-500'} font-medium mt-2 inline-block no-underline`} style={linkStyle}>
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className={`inline-block px-4 py-2 rounded-md ${darkMode ? 'border border-orange-400 text-orange-400 hover:bg-gray-700' : 'border border-orange-500 text-orange-500 hover:bg-beige-100'} no-underline`}
              style={linkStyle}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-8 px-4 ${darkMode ? 'bg-gray-800' : 'bg-beige-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-xl font-bold text-center ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
            Why Choose Us
          </h2>
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4 mt-6">
            {/* Feature 1 */}
            <div className="flex-1 text-center">
              <h3 className="font-bold no-underline">Experienced Professionals</h3>
              <p className="mt-1 no-underline">Our team consists of highly trained and experienced professionals.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex-1 text-center">
              <h3 className="font-bold no-underline">Quality Guaranteed</h3>
              <p className="mt-1 no-underline">We stand behind our work with satisfaction guarantees.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex-1 text-center">
              <h3 className="font-bold no-underline">Affordable Prices</h3>
              <p className="mt-1 no-underline">Quality service doesn't have to break the bank. Our pricing is fair and transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-8 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} no-underline`}>
            Ready to Get Started?
          </h2>
          <p className="max-w-md mx-auto mt-2 no-underline">
            Contact us today for a free consultation and quote.
          </p>
          <Link 
            to="/contact" 
            className={`inline-block px-4 py-2 rounded-md mt-4 ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} text-white no-underline`}
            style={linkStyle}
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
