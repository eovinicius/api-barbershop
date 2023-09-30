import { AppError } from '../../../../shared/error/AppError';
import { HaircutRepository } from './../../repositories/prisma/haircutRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
}

export class UpdateHaircutUseCase {
  constructor(private haircutRepository: HaircutRepository) {}

  async execute(data: IRequest): Promise<void> {

    console.log(data);

    const haircutAlreadyExists = await this.haircutRepository.findById(data.id);

    if (!haircutAlreadyExists) throw new AppError(400, 'haircut not found or does not exist');

    if (haircutAlreadyExists && haircutAlreadyExists.id != data.id) throw new AppError(400, 'Already registered haircut');

    const { id, name = haircutAlreadyExists.name, price = haircutAlreadyExists.price } = data;

    console.log({ id, name, price });

    await this.haircutRepository.update({ id, name, price });

  }
}

// object assign