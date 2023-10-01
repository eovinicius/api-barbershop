import { IUser, User } from '../../user';
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

  async findById(id: string): Promise<IUser | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async update(data: User): Promise<void> {
    const index = this.users.findIndex((user) => user.id === data.id);
    if (index !== -1) {
      this.users[index] = data;
    }
  }
}
