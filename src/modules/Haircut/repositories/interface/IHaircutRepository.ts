import { IHaircut } from '../../haircut';

export interface IHaircutRepository {
  create(data: IHaircut): Promise<void>;
  findByName(name: string): Promise<IHaircut | null>;
}
