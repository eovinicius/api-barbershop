import { Request, Response } from 'express';
import { UpdateBarberUseCase } from './updateBarberUseCase';
import { BarberRepository } from '../../repositories/prisma/barberRepository';

interface IRequest {
  name: string;
  photo: string;
}

export class UpdateBarberController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name, photo }: IRequest = request.body;
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const updateBarberUseCase = new UpdateBarberUseCase(barberRepository);

    await updateBarberUseCase.execute({ id, name, photo });

    return response.status(204).send();
  }
}
