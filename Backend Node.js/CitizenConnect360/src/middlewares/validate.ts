import { Request, Response, NextFunction } from 'express';
import { RegisterSchema } from '../helpers'; 

export function validateRegister(req: Request, res: Response, next: NextFunction): void {
    const { error } = RegisterSchema.validate(req.body);
    if (error) {
        // Sends a 400 Bad Request response with validation error messages
        res.status(400).send(error.details.map(detail => detail.message).join(', '));
    } else {
        next(); // Calls the next middleware or route handler if validation passes
    }
}
