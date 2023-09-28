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
}
