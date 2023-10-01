import { IBarber } from '../../barber';

export interface IBarberRepository {
  create(data: IBarber): Promise<void>;
  update(data: IBarber): Promise<void>;
  findById(id: string): Promise<IBarber | null>;
}
