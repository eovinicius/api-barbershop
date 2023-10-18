import { AppError } from '../../error/AppError';
import { HaircutRepository } from '../../ports/repositories/haircut-repository';

interface IRequest {
  id: string;
  name: string;
  price: number;
}

export class UpdateHaircutUseCase {
  constructor(private repository: HaircutRepository) {}

  async execute(data: IRequest): Promise<void> {
    const haircut = await this.repository.findById(data.id);

    if (!haircut) throw new AppError(400, 'haircut not exist');

    if (haircut && haircut.id !== data.id) throw new AppError(400, 'Already registered haircut');

    const { id, name = haircut.name, price = haircut.price } = data;

    await this.repository.update({ id, name, price });
  }
}


// object assign
