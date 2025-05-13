import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    // Handle login logic here
    console.log('Login form submitted', formData);
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
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Welcome Back</h1>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
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
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Password
              </label>
              <a href="#" className={`text-sm font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>
                Forgot Password?
              </a>
            </div>
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
          
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className={`w-4 h-4 ${darkMode ? 'bg-gray-700 border-gray-600 text-orange-400' : 'bg-beige-50 border-beige-200 text-orange-500'} rounded focus:ring-orange-500`}
            />
            <label htmlFor="rememberMe" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 px-4 ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
          >
            Sign In
          </button>
        </form>
        
        <div className={`mt-8 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Don't have an account?{' '}
          <Link to="/register" className={`font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
