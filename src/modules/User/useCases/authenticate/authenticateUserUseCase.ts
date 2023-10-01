import 'dotenv/config';
import { sign } from 'jsonwebtoken';
import { AppError } from './../../../../shared/error/AppError';
import { IUserRepository } from '../../repositories/interface/IUserRepository';
import { IProviderCrypto } from '../../provider/interface/IProviderCrypto';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository, private providerCrypto: IProviderCrypto) {}

  async execute(data: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) throw new AppError(400, 'email or password incorrect!');

    if (!(await this.providerCrypto.compare(data.password, user.password))) throw new AppError(400, 'email or password incorrect!');

    const token = sign({}, process.env.SECRET || '', {
      subject: user.id ?? '',
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}
