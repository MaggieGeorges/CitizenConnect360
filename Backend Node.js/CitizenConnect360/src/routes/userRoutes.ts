import express from 'express';
import { validateRegister } from '../middlewares/validate';
import { registerUser, authenticateUser, getUserDetails } from '../controllers/userController';
import { authenticateToken } from '../middlewares/auth'; // Adjust the path as needed

const router = express.Router();

// Public routes
router.post('/register',  validateRegister, registerUser);
router.post('/login', authenticateUser);

// Protected route
router.get('/:id', authenticateToken, getUserDetails);

export default router;
