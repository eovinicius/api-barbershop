import { AppError } from '../../../../shared/error/AppError';
import { IProviderCrypto } from '../../provider/interface/IProviderCrypto';
import { IUserRepository } from '../../repositories/interface/IUserRepository';

interface IRequest {
  id: string;
  name: string;
  password: string;
  phone: string;
  email: string;
}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository, private providerCrypto: IProviderCrypto) {}
  async execute(data: IRequest) {
    const user = await this.userRepository.findById(data.id);

    if (!user) throw new AppError(400, 'haircut not found or does not exist');

    const passwordHash = await this.providerCrypto.hash(data.password);

    const { 
      id,
      name = user.name,
      email = user.email,
      phone = user.phone,
      password = passwordHash
    } = data;

    await this.userRepository.update(data)
  }
}
