// src/types/custom.d.ts
import { JwtPayload } from '../middlewares/auth'; // Adjust the path as needed

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}
