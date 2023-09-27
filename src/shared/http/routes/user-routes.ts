import { AuthenticateUserController } from '../../../../src/modules/User/useCases/authenticate/authenticateUserController';
import { CreateUserController } from '../../../../src/modules/User/useCases/create/createUserController';
import { Router } from 'express';

export const userRoutes = Router();

userRoutes.post('/register', CreateUserController.handle);
userRoutes.post('/session', AuthenticateUserController.handle);
