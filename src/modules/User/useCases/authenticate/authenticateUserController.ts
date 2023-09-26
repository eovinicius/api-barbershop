import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/userRepository';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';

export class AuthenticateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRository = new UserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRository, providerCrypto);

    const authenticateInfo = await authenticateUserUseCase.execute({ email, password });

    return response.json(authenticateInfo);
  }
}
