import { IBarber } from '../../barber';

export interface IBarberRepository {
  create(data: IBarber): Promise<void>;
  findByCpf(cpf: string): Promise<IBarber | null>;
  findByPhone(phone: string): Promise<IBarber | null>;
  findByEmail(email: string): Promise<IBarber | null>;
}
