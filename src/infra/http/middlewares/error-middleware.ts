import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../application/error/AppError';

export const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.log(error.message);
  return res.status(500).json({ message: 'Internal Server Error' });
};
