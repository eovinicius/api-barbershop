import { IHaircut } from '../../haircut';
import { IHaircutRepository } from '../interface/IHaircutRepository';

export class InMemoryHaircutRepository implements IHaircutRepository {
  private haircut: IHaircut[] = [];

  async create(data: IHaircut): Promise<void> {
    this.haircut.push(data);
  }
  async findByName(name: string): Promise<IHaircut | null> {
    return this.haircut.find((haircut) => haircut.name === name) || null;
  }
}
