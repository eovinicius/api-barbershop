import { IBarber } from '../../barber';

export interface IBarberRepository {
  create(data: IBarber): Promise<void>;
}
