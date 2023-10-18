import { BarberRepository } from '../../ports/repositories/barber-repository';
import { Barber } from '../../../domain/entities/barber';

export class FindAllBarberUseCase {
  constructor(private repository: BarberRepository) {}

  async execute(): Promise<Barber[]> {
    const barber = await this.repository.findAll();
    return barber;
  }
}
