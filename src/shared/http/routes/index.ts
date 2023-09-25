import { Router } from 'express';

export const routes = Router();

routes.use('/', (req, res) => {
  res.json({ message: 'hello world!' });
});
