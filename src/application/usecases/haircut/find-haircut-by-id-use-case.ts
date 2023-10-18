import { Haircut } from '../../../domain/entities/haircut';
import { AppError } from '../../error/AppError';
import { HaircutRepository } from '../../ports/repositories/haircut-repository';

export class FindHaircutById {
  constructor(private repository: HaircutRepository) {}

  async execute(id: string): Promise<Haircut> {
    const haircut = await this.repository.findById(id);

    if (!haircut) throw new AppError(400, 'haircut not exist');

    return haircut;
  }
}
