import { Haircut } from '../../../domain/entities/haircut';
import { AppError } from '../../error/AppError';
import { HaircutRepository } from '../../ports/repositories/haircut-repository';

interface IRequest {
  name: string;
  price: number;
}

export class CreateHaircutUseCase {
  constructor(private haircutRepository: HaircutRepository) {}

  async execute(data: IRequest) {
    const nameAlreadyExists = await this.haircutRepository.findByName(data.name);

    if (nameAlreadyExists) throw new AppError(400, 'haircut already registered');

    const haircut = new Haircut({
      name: data.name,
      price: data.price,
    });

    await this.haircutRepository.create(haircut);
  }
}
