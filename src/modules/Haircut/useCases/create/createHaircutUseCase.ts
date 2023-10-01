import { AppError } from '../../../../shared/error/AppError';
import { Haircut } from '../../haircut';
import { IHaircutRepository } from '../../repositories/interface/IHaircutRepository';

interface IRequest {
  name: string;
  price: number;
}

export class CreateHaircutUseCase {
  constructor(private haircutRepository: IHaircutRepository) {}
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
