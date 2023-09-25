import { prisma } from '../../../../lib/prisma/prismaClient';
import { IUserCreateDTO, IUserDTO } from '../../dtos/IUserDTO';
import { IUserReposotory } from '../interface/IUserRepository';

export class UserRepositoory implements IUserReposotory {
  async create({ name, email, phone, password }: IUserCreateDTO): Promise<void> {
    const user = await prisma.user.create({ data: { name, email, phone, password } });
  }

  findByEmail(email: string): Promise<IUserDTO | null> {
    throw new Error('Method not implemented.');
  }

  findByPhone(phone: string): Promise<IUserDTO | null> {
    throw new Error('Method not implemented.');
  }
}
