import { prisma } from '../../../../lib/prisma/prismaClient';
import { IUserDTO } from '../../DTOS/IUserDTO';
import { IUserRepository } from '../interface/IUserRepository';

export class UserRepository implements IUserRepository {
  async create({ id, name, email, phone, password, created_at, updated_at }: IUserDTO): Promise<void> {
    await prisma.user.create({ data: { id, name, email, phone, password, created_at, updated_at } });
  }

  async findByEmail(email: string): Promise<IUserDTO | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findByPhone(phone: string): Promise<IUserDTO | null> {
    const user = await prisma.user.findUnique({ where: { phone } });
    return user;
  }
}
