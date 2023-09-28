import { prisma } from '../../../../lib/prisma/prismaClient';
import { IHaircut } from '../../haircut';

import { IHaircutRepository } from '../interface/IHaircutRepository';

export class HaircutRepository implements IHaircutRepository {
  async create(data: IHaircut): Promise<void> {
    await prisma.haircut.create({ data });
  }
  async findByName(name: string): Promise<IHaircut | null> {
    const haircut = await prisma.haircut.findUnique({ where: { name } });
    return haircut;
  }
}
