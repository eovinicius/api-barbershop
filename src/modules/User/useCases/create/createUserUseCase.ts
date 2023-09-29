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
  async execute({ name, password, phone, email }: IRequest): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) throw new AppError(400, 'email already registered');

    const phoneAlreadyExists = await this.userRepository.findByPhone(phone);

    if (phoneAlreadyExists) throw new AppError(400, 'phone already registered');

    const hashPassword = await this.providerCrypto.hash(password);

    const user = new User({
      id: randomUUID(),
      name,
      password: hashPassword,
      phone,
      email,
    });

    await this.userRepository.create({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    });
  }
}
