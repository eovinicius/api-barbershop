import { Customer } from '../../../domain/entities/customer';

export interface CustomerRepository {
  create(data: Customer): Promise<void>;
  update(data: Customer): Promise<void>;
  findById(id: string): Promise<Customer | null>;
  findByEmail(email: string): Promise<Customer | null>;
  findByPhone(phone: string): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
}
