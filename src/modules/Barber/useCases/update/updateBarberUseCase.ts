import { AppError } from '../../../../shared/error/AppError';
import { BarberRepository } from '../../repositories/prisma/barberRepository';

interface IRequest {
  id: string;
  name: string;
  photo: string;
}

export class UpdateBarberUseCase {
  constructor(private barberRepository: BarberRepository) {}
  async execute(data: IRequest) {
    const barber = await this.barberRepository.findById(data.id);

    if (!barber) throw new AppError(400, 'barber not found or does not exist');

    const { id, name = barber.name, photo = barber.photo } = data;

    await this.barberRepository.update({
      id,
      name,
      photo,
    });
  }
}
