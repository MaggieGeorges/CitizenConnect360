import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: number;
  role: string;
}

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    res.sendStatus(401); // Sends a 401 Unauthorized response
    return;
  }

  jwt.verify(token, process.env.SECRET || 'your_jwt_secret', (err, user) => {
    if (err) {
      res.sendStatus(403); // Sends a 403 Forbidden response
      return;
    }
    // Adds the user to the request object
    req.user = user as JwtPayload;
    next(); // Passes control to the next middleware or route handler
  });
}

export const authorizeRole = (roles: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
      if (!req.user || !roles.includes(req.user.role)) {
          return res.sendStatus(403);
      }
      next();
  };
};



export function generateToken(userId: number, role: string): string {
  return jwt.sign({ userId, role }, process.env.SECRET || 'your_jwt_secret', {
    expiresIn: '1h',
  });
}