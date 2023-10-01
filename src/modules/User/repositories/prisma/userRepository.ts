import { prisma } from '../../../../lib/prisma/prismaClient';
import { IUser } from '../../user';
import { IUserRepository } from '../interface/IUserRepository';

export class UserRepository implements IUserRepository {
  async create(data: IUser): Promise<void> {
    await prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findByPhone(phone: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { phone } });
    return user;
  }

  async findById(id: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update(data: IUser): Promise<void> {
    await prisma.user.update({ where: { id: data.id }, data });
  }
}
