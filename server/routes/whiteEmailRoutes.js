import express from 'express';
import {
  addWhiteEmail,
  getWhiteEmails,
  deleteWhiteEmail,
  updateWhiteEmail,
  checkWhiteEmail
} from '../controller/whiteEmailController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Admin routes
router.route('/')
  .post(protect, adminOnly, addWhiteEmail)
  .get(protect, adminOnly, getWhiteEmails);

router.route('/:id')
  .delete(protect, adminOnly, deleteWhiteEmail)
  .put(protect, adminOnly, updateWhiteEmail);

// Check route - can be used by the system
router.get('/check/:email', protect, checkWhiteEmail);

export default router; 