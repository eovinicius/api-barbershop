import { Request, Response } from 'express';
import { CreateHaircutUseCase } from './createHaircutUseCase';
import { HaircutRepository } from '../../repositories/prisma/haircutRepository';

interface IRequest {
  name: string;
  price: number;
}

export class CreateHaircutController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price }: IRequest = request.body;

    const haircutRepository = new HaircutRepository();
    const createHaircutUseCase = new CreateHaircutUseCase(haircutRepository);
    await createHaircutUseCase.execute({ name, price });

    return response.status(201).send();
  }
}
