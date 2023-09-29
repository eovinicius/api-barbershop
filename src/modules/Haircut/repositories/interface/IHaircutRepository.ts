import { IHaircut } from '../../haircut';

export interface IHaircutRepository {
  create(data: IHaircut): Promise<void>;
  findById(id: string): Promise<IHaircut | null>;
  findByName(name: string): Promise<IHaircut | null>;
  update(data: IHaircut): Promise<void>;
}
