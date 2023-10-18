import { CustomerRepository } from '../../../../application/ports/repositories/customer-repository';
import { Customer } from '../../../../domain/entities/customer';
import { prisma } from '../../../database/prisma-client';


export class PrismaCustomerRepository implements CustomerRepository {
  findAll(): Promise<Customer[]> {
    throw new Error('Method not implemented.');
  }
  async create(data: Customer): Promise<void> {
    await prisma.client.create({ data });
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const Customer = await prisma.client.findUnique({ where: { email } });
    return Customer;
  }

  async findByPhone(phone: string): Promise<Customer | null> {
    const Customer = await prisma.client.findUnique({ where: { phone } });
    return Customer;
  }

  async findById(id: string): Promise<Customer | null> {
    const Customer = await prisma.client.findUnique({ where: { id } });
    return Customer;
  }

  async update(data: Customer): Promise<void> {
    await prisma.client.update({ where: { id: data.id }, data });
  }
}
