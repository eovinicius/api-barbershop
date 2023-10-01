import { AppError } from './../../../../shared/error/AppError';
import { IUserRepository } from '../../repositories/interface/IUserRepository';
import { IProviderCrypto } from '../../provider/interface/IProviderCrypto';
import { User } from '../../user';
import { randomUUID } from 'crypto';

interface IRequest {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository, private providerCrypto: IProviderCrypto) {}
  async execute(data: IRequest): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (emailAlreadyExists) throw new AppError(400, 'email already registered');

    const phoneAlreadyExists = await this.userRepository.findByPhone(data.phone);

    if (phoneAlreadyExists) throw new AppError(400, 'phone already registered');

    const hashPassword = await this.providerCrypto.hash(data.password);

    const user = new User({
      name: data.name,
      password: hashPassword,
      phone: data.phone,
      email: data.email,
    });
    
    await this.userRepository.create(user);
  }
}
