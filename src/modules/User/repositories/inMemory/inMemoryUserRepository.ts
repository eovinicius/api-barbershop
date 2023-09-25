import { randomUUID } from 'crypto';
import { IUserCreateDTO, IUserDTO } from '../../dtos/IUserDTO';
import { IUserReposotory } from '../interface/IUserRepository';

export class InMemoryUserRepository implements IUserReposotory {
  private db: IUserDTO[] = [];

  async create({ id, name, email, phone, password, created_at, updated_at }: IUserCreateDTO): Promise<void> {
    if (!id) id = randomUUID();
    if (!created_at) created_at = new Date();
    if (!updated_at) updated_at = new Date();

    this.db.push({ id, name, email, phone, password, created_at, updated_at });
  }
  findByEmail(email: string): Promise<IUserDTO | null> {
    throw new Error('Method not implemented.');
  }
  findByPhone(phone: string): Promise<IUserDTO | null> {
    throw new Error('Method not implemented.');
  }
}
