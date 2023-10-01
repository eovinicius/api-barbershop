import { IUser } from '../../user';

export interface IUserRepository {
  create(data: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
  findByPhone(phone: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  update(data: IUser): Promise<void>;
}
