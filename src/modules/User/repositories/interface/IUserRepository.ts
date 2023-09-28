import { IUserDTO } from '../../DTOS/IUserDTO';

export interface IUserRepository {
  create(data: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IUserDTO | null>;
  findByPhone(phone: string): Promise<IUserDTO | null>;
}
