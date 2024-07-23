import express from 'express';
import { reportIncident, getIncidents, updateIncidentStatus, addComment, getCommentsForIncident } from '../controllers/incidentsController';
import { authenticateToken, authorizeRole } from '../middlewares/auth';

const router = express.Router();

// Public route - Everyone can view incidents
router.get('/', getIncidents);
router.get('/comments/:id', getCommentsForIncident);

// Protected routes for citizens
router.post('/report', authenticateToken, reportIncident);
router.post('/comment', authenticateToken, addComment);

// Protected route for government officials
router.post('/update-status', authenticateToken, authorizeRole('gov_official'), updateIncidentStatus);
export default router;