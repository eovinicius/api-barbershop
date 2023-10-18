import { AppError } from '../../error/AppError';
import { ProviderCrypto } from '../../ports/providers/provider-crypto';
import { CustomerRepository } from '../../ports/repositories/customer-repository';

interface IRequest {
  id: string;
  name: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  email: string;
  phone: string;
}

export class UpdateClientUseCase {
  constructor(private repository: CustomerRepository, private crypto: ProviderCrypto) {}

  async execute(data: IRequest): Promise<void> {
    const client = await this.repository.findById(data.id);

    if (!client) throw new AppError(400, 'client not exist');

    if (!(await this.repository.findByEmail(data.email))) throw new AppError(400, 'e-mail already registered');

    if (!(await this.repository.findByPhone(data.phone))) throw new AppError(400, 'phone already registered');

    if (data.newPassword !== data.confirmNewPassword) throw new AppError(400, 'passwords do not match');

    if (!(await this.crypto.compare(data.oldPassword, client.password))) throw new AppError(400, 'old invalid password');

    const passwordHash = await this.crypto.hash(data.newPassword);

    const { id, name = client.name, email = client.email, phone = client.phone, newPassword = passwordHash ?? client.password } = data;

    await this.repository.update({
      id,
      name,
      email,
      phone,
      password: newPassword,
      createdAt: client.createdAt,
      updatedAt: new Date(),
    });
  }
}
