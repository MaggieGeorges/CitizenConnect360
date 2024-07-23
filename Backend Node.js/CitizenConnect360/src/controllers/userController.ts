import { Request, Response } from 'express';
import { getPoolPromise, sql } from '../db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { renderAndSendEmail } from '../helpers/helpers';

export async function registerUser(req: Request, res: Response): Promise<void> {
    const { email, password, role } = req.body;

    try {
        const pool = await getPoolPromise();
        if (pool) {
            // Check if the email already exists
            const existingUser = await pool.request()
                .input('Email', sql.NVarChar, email)
                .query('SELECT * FROM Users WHERE email = @Email');

            if (existingUser.recordset.length > 0) {
                res.status(400).send('Email is already in use');
                return;
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert the new user
            await pool.request()
                .input('Email', sql.NVarChar, email)
                .input('Password', sql.NVarChar, hashedPassword)
                .input('Role', sql.NVarChar, role)
                .execute('RegisterUser');

            // Path to the ejs template
            const templatePath = path.resolve(__dirname, '../../Templates/register.ejs');
            const messageOptions = {
                to: email,
                from: process.env.EMAIL,
                subject: "Welcome to CitizenConnect360"
            };

            try {
                await renderAndSendEmail(templatePath, { name: email }, messageOptions);
                console.log(`Welcome email sent to ${email}`);
                res.status(201).send('User registered successfully');
            } catch (emailError) {
                console.error('Error sending welcome email:', emailError);
                res.status(500).send('Error sending welcome email');
            }
        } else {
            res.status(500).send('Database connection failed');
        }
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).send('Error during registration');
    }
}

export async function authenticateUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    const pool = await getPoolPromise();
    if (pool) {
      const result = await pool.request()
        .input('Email', sql.NVarChar, email)
        .query('SELECT * FROM Users WHERE email = @Email');

      const user = result.recordset[0];

      if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.SECRET || '', { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).send('Authentication failed');
      }
    } else {
      res.status(500).send('Database connection failed');
    }
  } catch (err) {
    console.error('Error during authentication:', err);
    res.status(500).send('Error during authentication');
  }
}

export async function getUserDetails(req: Request, res: Response): Promise<void> {
  const userId = req.params.id;

  try {
    const pool = await getPoolPromise();
    if (pool) {
      const result = await pool.request()
        .input('UserId', sql.Int, userId)
        .query('SELECT * FROM Users WHERE id = @UserId');
      
      if (result.recordset.length > 0) {
        res.json(result.recordset[0]);
      } else {
        res.status(404).send('User not found');
      }
    } else {
      res.status(500).send('Database connection failed');
    }
  } catch (err) {
    console.error('Error fetching user details:', err);
    res.status(500).send('Error fetching user details');
  }
}
