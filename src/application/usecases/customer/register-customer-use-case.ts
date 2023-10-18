import { Customer } from '../../../domain/entities/customer';
import { AppError } from '../../error/AppError';
import { ProviderCrypto } from '../../ports/providers/provider-crypto';
import { CustomerRepository } from '../../ports/repositories/customer-repository';

interface IRequest {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
}

export class RegisterCustomerUseCase {
  constructor(private repository: CustomerRepository, private Crypto: ProviderCrypto) {}

  async execute(data: IRequest): Promise<void> {
    const emailAlreadyExists = await this.repository.findByEmail(data.email);

    if (emailAlreadyExists) throw new AppError(400, 'email already registered');

    const phoneAlreadyExists = await this.repository.findByPhone(data.phone);

    if (phoneAlreadyExists) throw new AppError(400, 'phone already registered');

    if (data.password !== data.confirmPassword) throw new AppError(400, 'passwords do not match');

    const hashPassword = await this.Crypto.hash(data.password);

    const customer = new Customer({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: hashPassword,
    });

    await this.repository.create(customer);
  }
}
