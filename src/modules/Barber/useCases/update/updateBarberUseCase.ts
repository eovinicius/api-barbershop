import { AppError } from '../../../../shared/error/AppError'
import { IBarberRepository } from '../../repositories/interface/IBarberRepository';

interface IRequest {
  id: string;
  name: string;
  photo: string;
}

export class UpdateBarberUseCase {
  constructor(private barberRepository: IBarberRepository) {}
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
