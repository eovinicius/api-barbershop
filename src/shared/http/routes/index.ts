import { Router } from 'express';
import { userRoutes } from './user-routes';
import { haircutRoutes } from './haircut-routes';

export const routes = Router();

routes.use(userRoutes);
routes.use('/haircut', haircutRoutes);
