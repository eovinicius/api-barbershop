import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/userRepository';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';
import { UpdateUserUseCase } from './updateUserUseCase';

interface IRequest {
  name: string;
  password: string;
  phone: string;
  email: string;
}
export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, phone, password }: IRequest = request.body;
    const { id } = request.params;

    const userRository = new UserRepository();
    const providerCrypto = new ProviderCrypto();
    const updateUserUseCase = new UpdateUserUseCase(userRository, providerCrypto);

    await updateUserUseCase.execute({ id, name, password, phone, email });

    return response.status(204).send();
  }
}
