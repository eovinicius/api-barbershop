import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from './../../../../shared/error/AppError';
import { IUserRepository } from '../../repositories/interface/IUserRepository';

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
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new AppError(403, 'email or password incorrect!');

    if (!(await compare(password, user.password))) throw new AppError(403, 'email or password incorrect!');

    const token = sign({}, process.env.SECRET || '', {
      subject: user.id,
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