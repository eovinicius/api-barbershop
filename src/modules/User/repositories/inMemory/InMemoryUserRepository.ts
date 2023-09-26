import { IUserDTO } from '../../DTOS/IUserDTO';
import { IUserRepository } from '../interface/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  private users: IUserDTO[] = [];

  async findByEmail(email: string): Promise<IUserDTO | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findByPhone(phone: string): Promise<IUserDTO | null> {
    return this.users.find((user) => user.phone === phone) || null;
  }

  async create(user: IUserDTO): Promise<void> {
    this.users.push(user);
  }
}
