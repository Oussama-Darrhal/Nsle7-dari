import express from 'express';
import {
  createCommand,
  getCommands,
  getCommandById,
  updateCommand,
  deleteCommand,
  getCategories,
  assignCommand,
  completeCommand
} from '../controller/commandController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly, proOrAdminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Public routes
router.get('/categories', getCategories);

// Protected routes
router.route('/')
  .post(protect, createCommand)
  .get(protect, getCommands);

router.route('/:id')
  .get(protect, getCommandById)
  .put(protect, updateCommand)
  .delete(protect, deleteCommand);

router.put('/:id/assign', protect, proOrAdminOnly, assignCommand);
router.put('/:id/complete', protect, proOrAdminOnly, completeCommand);

export default router; 