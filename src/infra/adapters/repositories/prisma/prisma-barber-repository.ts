import { BarberRepository } from '../../../../application/ports/repositories/barber-repository';
import { Barber } from '../../../../domain/entities/barber';
import { prisma } from '../../../database/prisma-client';

export class PrismaBarberRepository implements BarberRepository {
  async findAll(): Promise<Barber[]> {
    return await prisma.barber.findMany();
  }
  async listAll(): Promise<Barber[]> {
    return await prisma.barber.findMany();
  }
  async create(data: Barber): Promise<void> {
    await prisma.barber.create({ data });
  }

  async update(data: Barber): Promise<void> {
    await prisma.barber.update({ where: { id: data.id }, data });
  }

  async findById(id: string): Promise<Barber | null> {
    return await prisma.barber.findUnique({ where: { id } });
  }
}
