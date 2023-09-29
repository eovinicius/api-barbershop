import { Router } from 'express';
import { CreateHaircutController } from '../../../modules/Haircut/useCases/create/createHaircutController';
import { UpdateHaircutController } from '../../../modules/Haircut/useCases/update/updateHaircutController';

export const haircutRoutes = Router();

haircutRoutes.post('/register', CreateHaircutController.handle);
haircutRoutes.put('/update/:id', UpdateHaircutController.handle);
