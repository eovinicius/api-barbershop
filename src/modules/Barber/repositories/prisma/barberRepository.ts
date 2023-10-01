import { prisma } from '../../../../lib/prisma/prismaClient';
import { IBarber } from '../../barber';
import { IBarberRepository } from '../interface/IBarberRepository';

export class BarberRepository implements IBarberRepository {
  async create(data: IBarber): Promise<void> {
    await prisma.barber.create({ data });
  }
}
