import { Haircut } from '../../../domain/entities/haircut';
import { HaircutRepository } from '../../ports/repositories/haircut-repository';

export class FindAllShirtUseCase {
  constructor(private repository: HaircutRepository) {}

  async execute(): Promise<Haircut[]> {
    const haircuts = await this.repository.findAll();
    return haircuts;
  }
}
