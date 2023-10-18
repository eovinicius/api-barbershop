import { Appointment } from '../../../domain/entities/appointment';
import { AppError } from '../../error/AppError';
import { DataUtil } from '../../utils/dataUtil';
import { AppointmentRepository } from './../../ports/repositories/appointment-repository';
import { BarberRepository } from './../../ports/repositories/barber-repository';
import { CustomerRepository } from './../../ports/repositories/customer-repository';

interface IRequest {
  id_customer: string;
  id_barber: string;
  haircut_date: string;
}

export class CreateAppoinment {
  constructor(private appointmentRepository: AppointmentRepository, private barberRepository: BarberRepository, private customerRepository: CustomerRepository) {}

  async execute(data: IRequest) {
    if (!(await this.barberRepository.findById(data.id_barber))) throw new AppError(400, 'barber not exists');

    if (!(await this.customerRepository.findById(data.id_customer))) throw new AppError(400, 'customer not exists');

    const formattedTime = DataUtil.convertStringToDate(data.haircut_date);

    if (!(await this.appointmentRepository.findByAppointment(formattedTime))) throw new AppError(400, 'time not available');

    const appointment = new Appointment(data);

    await this.appointmentRepository.create(appointment);
  }
}
