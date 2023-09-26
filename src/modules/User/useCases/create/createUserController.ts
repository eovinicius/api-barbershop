import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';
import { UserRepository } from '../../repositories/prisma/userRepository';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';

interface IRequest {
  name: string;
  password: string;
  phone: string;
  email: string;
}

export class CreateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, phone, email }: IRequest = request.body;

    const userRository = new UserRepository();
    const providerCrypto = new ProviderCrypto();
    const createUserUseCase = new CreateUserUseCase(userRository, providerCrypto);

    await createUserUseCase.execute({ name, password, phone, email });

    return response.status(201).send();
  }
}
