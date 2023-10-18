import { Request, Response } from 'express';
import { BcryptProviderCrypto } from '../../../adapters/provider/bcrypt-provider-crypto';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class CreateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const data: IRequest = request.body;

    const userRository = new PrismaClientRepository();
    const providerCrypto = new BcryptProviderCrypto();
    const createUserUseCase = new CreateClientUseCase(userRository, providerCrypto);

    await createUserUseCase.execute(data);

    return response.status(201).send();
  }
}
