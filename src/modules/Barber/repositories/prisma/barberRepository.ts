import { prisma } from '../../../../lib/prisma/prismaClient';
import { IBarber } from '../../barber';
import { IBarberRepository } from '../interface/IBarberRepository';

export class BarberRepository implements IBarberRepository {
  async create(data: IBarber): Promise<void> {
    await prisma.barber.create({ data });
  }

  async update(data: IBarber): Promise<void> {
    await prisma.barber.update({ where: { id: data.id }, data });
  }

  async findById(id: string): Promise<IBarber | null> {
    const barber = await prisma.barber.findUnique({ where: { id } });
    return barber;
  }
}
