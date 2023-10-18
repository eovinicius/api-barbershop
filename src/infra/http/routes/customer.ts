import { Router } from 'express';
import { CreateUserController } from '../controllers/customer/create-customer-controller';

export const routeClient = Router();

routeClient.post('/register', CreateUserController.handle);
