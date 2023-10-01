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

  async findById(id: string): Promise<IHaircut | null> {
    return this.haircut.find((haircut) => haircut.id === id) || null;
  }

  async update(data: IHaircut): Promise<void> {
    const index = this.haircut.findIndex((haircut) => haircut.id === data.id);
    if (index !== -1) {
      this.haircut[index] = data;
    }
  }
}
