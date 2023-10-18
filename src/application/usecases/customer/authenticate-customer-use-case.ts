import { ProviderCrypto } from '../../ports/providers/provider-crypto';
import { AppError } from '../../error/AppError';
import { CustomerRepository } from '../../ports/repositories/customer-repository';
import { ProviderAuthenticate } from '../../ports/providers/provider-authenticate';
import { sign } from 'jsonwebtoken';

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
  constructor(private Repository: CustomerRepository, private Crypto: ProviderCrypto, private auth: ProviderAuthenticate) {}

  async execute(data: IRequest): Promise<IResponse> {
    const user = await this.Repository.findByEmail(data.email);

    if (!user) throw new AppError(400, 'email or password incorrect!');

    if (!(await this.Crypto.compare(data.password, user.password))) throw new AppError(400, 'email or password incorrect!');

    const token = this.auth.sign({
      payload: {},
      secret: process.env.SECRET ?? '',
      options: {
        subject: user.id,
        expiresIn: '1d',
      },
    });

    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenResponse;
  }
}
