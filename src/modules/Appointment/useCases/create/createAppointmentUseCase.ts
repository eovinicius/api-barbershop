import { IHaircut } from '../../../Haircut/haircut';
import { IAppointmentRepository } from '../../repositories/interface/IAppointmentRepository.';

interface IRequest {
  idUser: string;
  idBarber: string;
  haircutDate: Date;
  createdAt: Date;
  Haircuts: IHaircut[];
}

export class CreateAppointmentUseCase {
  constructor(private appointmentRepository: IAppointmentRepository) {}
  async execute({ idUser, idBarber, haircutDate, createdAt, Haircuts }: IRequest): Promise<void> {
    
  }
}
