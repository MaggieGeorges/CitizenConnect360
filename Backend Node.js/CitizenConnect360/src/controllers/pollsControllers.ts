import express from 'express';
import { Request, Response } from 'express';
import sql from 'mssql'; // or your preferred SQL library

const router = express.Router();

// Get all polls
router.get('/polls', async (req: Request, res: Response) => {
    try {
        const result = await sql.query`EXEC GetPolls`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching polls:', error);
        res.status(500).send('Error fetching polls');
    }
});

// Create a new poll
router.post('/polls', async (req: Request, res: Response) => {
    const { question, category, options } = req.body;
    try {
        await sql.query`EXEC AddPoll @Question=${question}, @Category=${category}, @Options=${options}`;
        res.status(201).send('Poll created');
    } catch (error) {
        console.error('Error creating poll:', error);
        res.status(500).send('Error creating poll');
    }
});

// Update an existing poll
router.put('/polls/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { question, category, options } = req.body;
    try {
        await sql.query`EXEC UpdatePoll @Id=${id}, @Question=${question}, @Category=${category}, @Options=${options}`;
        res.send('Poll updated');
    } catch (error) {
        console.error('Error updating poll:', error);
        res.status(500).send('Error updating poll');
    }
});

// Delete a poll
router.delete('/polls/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await sql.query`EXEC DeletePoll @Id=${id}`;
        res.send('Poll deleted');
    } catch (error) {
        console.error('Error deleting poll:', error);
        res.status(500).send('Error deleting poll');
    }
});

// Vote on a poll
router.post('/polls/:id/vote', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId, option } = req.body;
    try {
        await sql.query`EXEC AddVote @PollId=${id}, @UserId=${userId}, @Option=${option}`;
        res.send('Vote recorded');
    } catch (error) {
        console.error('Error recording vote:', error);
        res.status(500).send('Error recording vote');
    }
});

// Get results for a poll
router.get('/polls/:id/results', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await sql.query`EXEC GetPollResults @PollId=${id}`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching poll results:', error);
        res.status(500).send('Error fetching poll results');
    }
});

export default router;
