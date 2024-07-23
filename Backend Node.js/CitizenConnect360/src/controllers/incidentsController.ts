import { Request, Response } from 'express';
import { getPoolPromise, sql } from '../db'; // Adjust path as needed

export async function reportIncident(req: Request, res: Response): Promise<void> {
    const { description, location, datetime, media, userId } = req.body;

    try {
        const pool = await getPoolPromise();
        if (pool) {
            await pool.request()
                .input('Description', sql.NVarChar, description)
                .input('Location', sql.NVarChar, location)
                .input('Datetime', sql.DateTime, datetime)
                .input('Media', sql.NVarChar, media)
                .input('UserId', sql.Int, userId)
                .execute('ReportIncident');
            res.status(201).send('Incident reported successfully');
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        res.status(500).send('Error reporting incident');
    }
}

export async function getIncidents(req: Request, res: Response): Promise<void> {
    try {
        const pool = await getPoolPromise();
        if (pool) {
            const result = await pool.request().execute('GetIncidents');
            res.json(result.recordset);
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        res.status(500).send('Error fetching incidents');
    }
}

export async function updateIncidentStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.body;

    try {
        const pool = await getPoolPromise();
        if (pool) {
            await pool.request()
                .input('Id', sql.Int, id)
                .input('Status', sql.NVarChar, status)
                .execute('UpdateIncidentStatus');
            res.status(200).send('Incident status updated');
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        res.status(500).send('Error updating incident status');
    }
}

export async function addComment(req: Request, res: Response): Promise<void> {
    const { incidentId, text } = req.body;

    try {
        const pool = await getPoolPromise();
        if (pool) {
            await pool.request()
                .input('IncidentId', sql.Int, incidentId)
                .input('Text', sql.NVarChar, text)
                .execute('AddComment');
            res.status(201).send('Comment added successfully');
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        res.status(500).send('Error adding comment');
    }
}

export async function getCommentsForIncident(req: Request, res: Response): Promise<void> {
    const incidentId = parseInt(req.params.id, 10);

    try {
        const pool = await getPoolPromise();
        if (pool) {
            const result = await pool.request()
                .input('IncidentId', sql.Int, incidentId)
                .execute('GetCommentsForIncident');
            res.json(result.recordset);
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        res.status(500).send('Error fetching comments');
    }
}
