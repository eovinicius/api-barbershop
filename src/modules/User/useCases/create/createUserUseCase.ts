import { hash } from 'bcrypt';
import { AppError } from './../../../../shared/error/AppError';
import { IUserRepository } from '../../repositories/interface/IUserRepository';
import { IProviderCrypto } from '../../provider/interface/IProviderCrypto';
import { prisma } from '@/lib/prisma/prismaClient';

interface IRequest {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository, private providerCrypto: IProviderCrypto) {}
  async execute({ name, password, phone, email }: IRequest): Promise<void> {
    const emailAlreadyExists = this.userRepository.findByEmail(email);

    if (!emailAlreadyExists) throw new AppError(400, 'email already registered');

    const phoneAlreadyExists = this.userRepository.findByPhone(phone);

    if (!phoneAlreadyExists) throw new AppError(400, 'phone already registered');

    const hashPassword = await hash(password, 10);

    await this.userRepository.create({
      name,
      email,
      phone,
      password: hashPassword,
    });
  }
}
