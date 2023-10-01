import { Request, Response } from 'express';
import { CreateBarberUseCase } from './createBarberUseCase';
import { BarberRepository } from '../../repositories/prisma/barberRepository';

interface IRequest {
  name: string;
  photo: string;
}

export class CreateBarberController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name, photo }: IRequest = request.body;

    const barberRepository = new BarberRepository();
    const createBarberUseCase = new CreateBarberUseCase(barberRepository);

    await createBarberUseCase.execute({ name, photo });

    return response.status(201).send();
  }
}
