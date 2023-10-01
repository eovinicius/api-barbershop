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
    
  }
}
