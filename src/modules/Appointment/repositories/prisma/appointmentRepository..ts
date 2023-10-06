import { prisma } from '../../../../lib/prisma/prismaClient';
import { IAppointmentRepository } from '../interface/IAppointmentRepository.';

export class AppointmentRepository implements IAppointmentRepository {
  create(): Promise<void> {
    await prisma.appointment.create({data: {}})
  }
}
