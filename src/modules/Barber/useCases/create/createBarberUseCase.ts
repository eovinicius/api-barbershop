import { randomUUID } from 'crypto';
import { Barber } from '../../barber';
import { IBarberRepository } from '../../repositories/interface/IBarberRepository';

interface IRequest {
  name: string;
  photo: string;
}

export class CreateBarberUseCase {
  constructor(private barberRepository: IBarberRepository) {}
  async execute(data: IRequest) {
    const barber = new Barber({
      id: randomUUID(),
      name: data.name,
      photo: data.photo,
    });

    await this.barberRepository.create(barber);
  }
}
