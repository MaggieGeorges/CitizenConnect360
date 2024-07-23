import express from 'express';
import { AddComments, getAllPosts, createPost, likePost, getCommentsForPost } from '../controllers/postsController';
import { authenticateToken, authorizeRole } from '../middlewares/auth';

const router = express.Router();

// Public routes - Accessible to all users
router.get('/', authenticateToken, getAllPosts);
router.get('/:postId/comments', authenticateToken, getCommentsForPost);

// Protected routes for all authenticated users
router.post('/:postId/like', authenticateToken, likePost);
router.post('/:postId/comments', authenticateToken, AddComments);

// Protected route for citizens only
router.post('/', authenticateToken, authorizeRole('citizen'), createPost);

export default router;
