import { Appointment } from '../../../domain/entities/appointment';

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>;
  findByAppointment(appoitment: Date): Promise<Appointment>
}
