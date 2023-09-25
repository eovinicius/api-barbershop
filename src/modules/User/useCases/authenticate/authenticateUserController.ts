import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/userRepository';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const userRository = new UserRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRository);

    const authenticateInfo = await authenticateUserUseCase.execute({ email, password });

    return res.json(authenticateInfo);
  }
}
