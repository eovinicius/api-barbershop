import { Barber } from '../../../domain/entities/barber';
import { AppError } from '../../error/AppError';
import { BarberRepository } from '../../ports/repositories/barber-repository';

export class FindBarberById {
  constructor(private repository: BarberRepository) {}

  async execute(id: string): Promise<Barber> {
    const barber = await this.repository.findById(id);

    if (!barber) throw new AppError(400, 'barber not exist');

    return barber;
  }
}
