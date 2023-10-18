import { Router } from 'express';
import { routeClient } from './customer';

export const routes = Router();

routes.use(routeClient);
