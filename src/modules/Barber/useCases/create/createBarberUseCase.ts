import { IBarberRepository } from '../../repositories/interface/IBarberRepository';

interface IRequest {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

export class CreateBarberUseCase {
  constructor(private barberRepository: IBarberRepository) {}
  async execute(data: IRequest) {
    const cpfAlreadyExists = await this.barberRepository.findByCpf(data.cpf);
  }
}
