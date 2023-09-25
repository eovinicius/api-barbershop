import { IUserCreateDTO, IUserDTO } from '../../dtos/IUserDTO';

export interface IUserRepository {
  create({ name, email, phone, password }: IUserCreateDTO): Promise<void>;
  findByEmail(email: string): Promise<IUserDTO | null>;
  findByPhone(phone: string): Promise<IUserDTO | null>;
}
