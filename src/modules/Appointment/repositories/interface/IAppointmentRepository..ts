import { IAppointment } from '../../appointment';

export interface IAppointmentRepository {
  create(appointment: IAppointment): Promise<void>;
  getByUser(id: string): Promise<IAppointment>;
  getByBarbar(id: string): Promise<IAppointment>;
  getByhaircutDate(date: Date): Promise<IAppointment>;
}
