import { AppError } from '../../error/AppError';
import { BarberRepository } from '../../ports/repositories/barber-repository';

interface IRequest {
  id: string;
  name: string;
  photo: string;
}

export class UpdateBarberUseCase {
  constructor(private repository: BarberRepository) {}

  async execute(data: IRequest): Promise<void> {
    const barber = await this.repository.findById(data.id);

    if (!barber) throw new AppError(400, 'barber not exist');

    const { id, name = barber.name, photo = barber.photo } = data;

    await this.repository.update({
      id,
      name,
      photo,
    });
  }
}

// object assign
