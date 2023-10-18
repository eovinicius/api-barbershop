import { HaircutRepository } from '../../../../application/ports/repositories/haircut-repository';
import { Haircut } from '../../../../domain/entities/haircut';
import { prisma } from '../../../database/prisma-client';

export class PrismaHaircutRepository implements HaircutRepository {
  async listAll(): Promise<Haircut[]> {
    return await prisma.haircut.findMany();
  }
  async create(data: Haircut): Promise<void> {
    await prisma.haircut.create({ data });
  }

  async findById(id: string): Promise<Haircut | null> {
    const haircut = await prisma.haircut.findUnique({ where: { id } });
    return haircut;
  }

  async findByName(name: string): Promise<Haircut | null> {
    const haircut = await prisma.haircut.findUnique({ where: { name } });
    return haircut;
  }

  async update(data: Haircut): Promise<void> {
    await prisma.haircut.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        price: data.price,
      },
    });
  }
}
