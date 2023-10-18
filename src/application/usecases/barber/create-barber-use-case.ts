import { Barber } from '../../../domain/entities/barber';
import { BarberRepository } from '../../ports/repositories/barber-repository';

interface IRequest {
  name: string;
  photo: string;
}

export class CreateBarberUseCase {
  constructor(private repository: BarberRepository) {}

  async execute(data: IRequest) {
    const barber = new Barber(data);
    await this.repository.create(barber);
  }
}
