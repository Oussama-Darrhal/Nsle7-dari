import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import config from './config/env.config.js';
import fs from 'fs';
import path from 'path';

// Import routes
import userRoutes from './routes/userRoutes.js';
import whiteEmailRoutes from './routes/whiteEmailRoutes.js';
import commandRoutes from './routes/commandRoutes.js';

// Connect to database
connectDB();

// Initialize Express
const app = express();
const PORT = config.port;

// CORS configuration
const corsOptions = {
  origin: config.frontendUrl,
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/whitelist', whiteEmailRoutes);
app.use('/api/commands', commandRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
  console.log(`CORS enabled for: ${config.frontendUrl}`);
});
