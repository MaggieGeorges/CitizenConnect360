import { Request, Response } from 'express';
import { getPoolPromise, sql } from '../db'; // Adjust path as needed

// Get all posts
export async function getAllPosts(req: Request, res: Response): Promise<void> {
    try {
        const pool = await getPoolPromise();
        const result = await pool.request()
            .execute('GetAllPosts');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('Error fetching posts');
    }
}

// Create a new post
export async function createPost(req: Request, res: Response): Promise<void> {
    const { title, content, author } = req.body;
    const date = new Date();
    try {
        const pool = await getPoolPromise();
        await pool.request()
            .input('Title', sql.NVarChar, title)
            .input('Content', sql.NVarChar, content)
            .input('Author', sql.NVarChar, author)
            .input('Date', sql.DateTime, date)
            .execute('CreatePost');
        res.status(201).send('Post created successfully');
    } catch (err) {
        res.status(500).send('Error creating post');
    }
}

// Like a post
export async function likePost(req: Request, res: Response): Promise<void> {
    const postId = parseInt(req.params.postId, 10);
    try {
        const pool = await getPoolPromise();
        await pool.request()
            .input('PostId', sql.Int, postId)
            .execute('LikePost');
        res.status(200).send('Post liked successfully');
    } catch (err) {
        res.status(500).send('Error liking post');
    }
}

// Add a comment to a post

export async function AddComments(req: Request, res: Response): Promise<void> {
    const { content, author } = req.body;
    const postId = parseInt(req.params.postId, 10);
    const date = new Date();

    if (!postId || !content || !author) {
        res.status(400).send('Missing required fields');
        return;
    }

    try {
        const pool = await getPoolPromise();
        await pool.request()
            .input('PostId', sql.Int, postId)
            .input('Content', sql.NVarChar, content)
            .input('Author', sql.NVarChar, author)
            .input('Date', sql.DateTime, date)
            .execute('AddComments'); // Ensure procedure name is correct
        res.status(201).send('Comment added successfully');
    } catch (err) {
        console.error('Error adding comment:', err);
        res.status(500).send('Error adding comment');
    }
}

// Get comments for a post

export async function getCommentsForPost(req: Request, res: Response): Promise<void> {
    const postId = parseInt(req.params.postId, 10); // Adjusted parameter name

    try {
        const pool = await getPoolPromise();
        const result = await pool.request()
            .input('PostId', sql.Int, postId)
            .execute('GetCommentsForPost');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).send('Error fetching comments');
    }
}