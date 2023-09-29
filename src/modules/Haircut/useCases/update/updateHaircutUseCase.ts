import { AppError } from '../../../../shared/error/AppError';
import { HaircutRepository } from './../../repositories/prisma/haircutRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
}

export class UpdateHaircutUseCase {
  constructor(private haircutRepository: HaircutRepository) {}
  async execute({ id, name, price }: IRequest): Promise<void> {
    const haircutAlreadyExists = await this.haircutRepository.findById(id);

    if (!haircutAlreadyExists) throw new AppError(400, 'haircut not found or does not exist');

    if (haircutAlreadyExists && haircutAlreadyExists.id != id) {
      throw new AppError(400, 'Already registered haircut');
    }

    await this.haircutRepository.update({ id, name, price });
  }
}
