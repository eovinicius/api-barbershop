import { Haircut } from '../../../domain/entities/haircut';

export interface HaircutRepository {
  create(data: Haircut): Promise<void>;
  update(data: Haircut): Promise<void>;
  findById(id: string): Promise<Haircut | null>;
  findByName(name: string): Promise<Haircut | null>;
  findAll(): Promise<Haircut[]>;
}
