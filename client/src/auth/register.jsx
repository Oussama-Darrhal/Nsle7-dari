import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  // Check system preference for dark/light mode
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration form submitted', formData);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${darkMode ? 'bg-gray-900' : 'bg-beige-50'}`}>
      <div className="absolute top-4 right-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Create Account</h1>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Join us today</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="fullName" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-orange-400' : 'bg-beige-50 text-gray-900 border-beige-200 focus:border-orange-500'} border focus:ring-2 focus:ring-opacity-50 focus:outline-none transition`}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-orange-400' : 'bg-beige-50 text-gray-900 border-beige-200 focus:border-orange-500'} border focus:ring-2 focus:ring-opacity-50 focus:outline-none transition`}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-orange-400' : 'bg-beige-50 text-gray-900 border-beige-200 focus:border-orange-500'} border focus:ring-2 focus:ring-opacity-50 focus:outline-none transition`}
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-orange-400' : 'bg-beige-50 text-gray-900 border-beige-200 focus:border-orange-500'} border focus:ring-2 focus:ring-opacity-50 focus:outline-none transition`}
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className={`w-4 h-4 ${darkMode ? 'bg-gray-700 border-gray-600 text-orange-400' : 'bg-beige-50 border-beige-200 text-orange-500'} rounded focus:ring-orange-500`}
              required
            />
            <label htmlFor="agreeToTerms" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I agree to the <a href="#" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>Terms of Service</a> and <a href="#" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>Privacy Policy</a>
            </label>
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 px-4 ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
          >
            Create Account
          </button>
        </form>
        
        <div className={`mt-8 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Already have an account?{' '}
          <Link to="/login" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
