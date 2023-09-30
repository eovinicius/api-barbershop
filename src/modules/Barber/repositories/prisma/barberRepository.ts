import { prisma } from '../../../../lib/prisma/prismaClient';
import { IBarber } from '../../barber';
import { IBarberRepository } from '../interface/IBarberRepository';

export class BarberRepository implements IBarberRepository {
  async findByCpf(cpf: string): Promise<IBarber | null> {
    const barber = await prisma.barber.findUnique({ where: { cpf } });
    return barber;
  }
  async findByPhone(phone: string): Promise<IBarber | null> {
    const barber = await prisma.barber.findUnique({ where: { phone } });
    return barber;
  }
  async findByEmail(email: string): Promise<IBarber | null> {
    const barber = await prisma.barber.findUnique({ where: { email } });
    return barber;
  }
  async create(data: IBarber): Promise<void> {
    await prisma.barber.create({ data });
  }
}
