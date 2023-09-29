import { randomUUID } from 'crypto';
import { AppError } from '../../../../shared/error/AppError';
import { Haircut } from '../../haircut';
import { HaircutRepository } from './../../repositories/prisma/haircutRepository';

interface IRequest {
  name: string;
  price: number;
}

export class CreateHaircutUseCase {
  constructor(private haircutRepository: HaircutRepository) {}
  async execute({ name, price }: IRequest) {
    const nameAlreadyExists = await this.haircutRepository.findByName(name);

    if (nameAlreadyExists) throw new AppError(400, 'haircut already registered');

    const haircut = new Haircut({
      id: randomUUID(),
      name,
      price,
    });

    await this.haircutRepository.create({
      id: haircut.id,
      name: haircut.name,
      price: haircut.price,
    });
  }
}
