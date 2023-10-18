import { Barber } from '../../../domain/entities/barber';

export interface BarberRepository {
  create(data: Barber): Promise<void>;
  update(data: Barber): Promise<void>;
  findById(id: string): Promise<Barber | null>;
  findAll(): Promise<Barber[]>;
}
