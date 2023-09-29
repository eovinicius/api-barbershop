import { Request, Response } from 'express';
import { HaircutRepository } from '../../repositories/prisma/haircutRepository';
import { UpdateHaircutUseCase } from './updateHaircutUseCase';

interface IRequest {
  name: string;
  price: number;
}

export class UpdateHaircutController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name, price }: IRequest = request.body;
    const { id } = request.params;

    const haircutRepository = new HaircutRepository();
    const updateHaircutUseCase = new UpdateHaircutUseCase(haircutRepository);
    await updateHaircutUseCase.execute({ id, name, price });

    return response.status(204).send();
  }
}
