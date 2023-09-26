import { prisma } from '../../../../lib/prisma/prismaClient';
import { IUserCreateDTO, IUserDTO } from '../../DTOS/IUserDTO';
import { IUserRepository } from '../interface/IUserRepository';

export class UserRepository implements IUserRepository {
  async create({ name, email, phone, password }: IUserCreateDTO): Promise<void> {
    await prisma.user.create({ data: { name, email, phone, password } });
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
