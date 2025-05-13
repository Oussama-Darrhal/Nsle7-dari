/**
 * Environment Variable Configuration for the Application
 * 
 * Required Environment Variables:
 * - PORT: Port on which the server runs (default: 5000)
 * - MONGO_URI: MongoDB connection string
 * - JWT_SECRET: Secret for JWT token generation
 * - NODE_ENV: Application environment (development/production)
 * - FRONTEND_URL: URL of the frontend application (for CORS)
 */

import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
};

export default config; 