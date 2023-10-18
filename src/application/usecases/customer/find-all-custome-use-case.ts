import { Customer } from '../../../domain/entities/customer';
import { CustomerRepository } from '../../ports/repositories/customer-repository';

export class FindAllCustomerUseCase {
  constructor(private repository: CustomerRepository) {}

  async execute(): Promise<Customer[]> {
    const customer = await this.repository.findAll();
    return customer;
  }
}
