import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, response, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('🔥 Server started on port 3333!'));
