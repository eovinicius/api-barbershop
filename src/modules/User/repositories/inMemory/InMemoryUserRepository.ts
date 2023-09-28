import { IUser } from '../../user';
import { IUserRepository } from '../interface/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  private users: IUser[] = [];

  async findByEmail(email: string): Promise<IUser | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findByPhone(phone: string): Promise<IUser | null> {
    return this.users.find((user) => user.phone === phone) || null;
  }

  async create(data: IUser): Promise<void> {
    this.users.push(data);
  }
}
