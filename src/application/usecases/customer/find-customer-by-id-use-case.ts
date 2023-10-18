
import { Customer } from '../../../domain/entities/customer';
import { AppError } from '../../error/AppError';
import { CustomerRepository } from '../../ports/repositories/customer-repository';


export class FindHaircutById {
  constructor(private repository: CustomerRepository) {}

  async execute(id: string): Promise<Customer> {
    const customer = await this.repository.findById(id);

    if (!customer) throw new AppError(400, 'customer not exist');

    return customer;
  }
}
