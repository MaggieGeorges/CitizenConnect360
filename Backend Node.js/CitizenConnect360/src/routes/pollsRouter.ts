import express from 'express';
import { Request, Response } from 'express';
import { sql, getPoolPromise } from '../db'; 
import { authenticateToken, authorizeRole } from '../middlewares/auth';

const router = express.Router();

// Middleware to authenticate token
router.use(authenticateToken);

// Get all polls
router.get('/', async (req: Request, res: Response) => {
    try {
        const pool = await getPoolPromise();
        const result = await pool.request().query('EXEC GetPolls');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching polls:', error);
        res.status(500).send('Error fetching polls');
    }
});

// Create a new poll (Gov officials only)
router.post('/', authorizeRole('gov_official'), async (req: Request, res: Response) => {
    const { question, category, options } = req.body;
    try {
        const pool = await getPoolPromise();
        const optionsString = typeof options === 'object' ? JSON.stringify(options) : options;
        
        await pool.request()
            .input('Question', sql.NVarChar, question)
            .input('Category', sql.NVarChar, category)
            .input('Options', sql.NVarChar, optionsString)
            .query('EXEC AddPoll @Question, @Category, @Options');
        
        res.status(201).send('Poll created');
    } catch (error) {
        console.error('Error creating poll:', error);
        res.status(500).send('Error creating poll');
    }
});

// Update an existing poll (Gov officials only)
router.put('/:id', authorizeRole('gov_official'), async (req: Request, res: Response) => {
    const { id } = req.params;
    const { question, category, options } = req.body;
    try {
        const pool = await getPoolPromise();
        const optionsString = Array.isArray(options) ? JSON.stringify(options) : options;

        await pool.request()
            .input('Id', sql.Int, id)
            .input('Question', sql.NVarChar, question)
            .input('Category', sql.NVarChar, category)
            .input('Options', sql.NVarChar, optionsString)
            .query('EXEC UpdatePoll @Id, @Question, @Category, @Options');

        res.send('Poll updated');
    } catch (error) {
        console.error('Error updating poll:', error instanceof Error ? error.message : 'Unknown error');
        res.status(500).send(`Error updating poll: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
});



// Delete a poll (Gov officials only)
router.delete('/:id', authorizeRole('gov_official'), async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pool = await getPoolPromise();
        await pool.request()
            .input('Id', sql.Int, id)
            .query('EXEC DeletePoll @Id');
        res.send('Poll deleted');
    } catch (error) {
        console.error('Error deleting poll:', error);
        res.status(500).send('Error deleting poll');
    }
});

// Vote on a poll (Citizens only, vote only once)
router.post('/:id/vote',authorizeRole('citizen'), async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId, option } = req.body;
    try {
        const pool = await getPoolPromise();
        // Check if the user has already voted
        const checkVote = await pool.request()
            .input('PollId', sql.Int, id)
            .input('UserId', sql.Int, userId)
            .query('EXEC CheckUserVote @PollId, @UserId');

        if (checkVote.recordset[0].HasVoted === 1) {
            return res.status(403).send('User has already voted on this poll');
        }

        await pool.request()
            .input('PollId', sql.Int, id)
            .input('UserId', sql.Int, userId)
            .input('Option', sql.NVarChar, option)
            .query('EXEC AddVote @PollId, @UserId, @Option');
        res.send('Vote recorded');
    } catch (error) {
        console.error('Error recording vote:', error);
        res.status(500).send('Error recording vote');
    }
});

// Get results for a poll
router.get('/:id/results', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pool = await getPoolPromise();
        const result = await pool.request()
            .input('PollId', sql.Int, id)
            .query('EXEC GetPollResults @PollId');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching poll results:', error);
        res.status(500).send('Error fetching poll results');
    }
});

export default router;
