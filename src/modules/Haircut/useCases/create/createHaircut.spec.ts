import { describe, expect, it } from 'vitest';
import { AppError } from '../../../../shared/error/AppError';
import { InMemoryHaircutRepository } from '../../repositories/inMemory/InMemoryHaircutRepository';
import { CreateHaircutUseCase } from './createHaircutUseCase';

describe('CreateHaircutUseCase', () => {
  it('should create a new haircut', async () => {
    const haircutRepository = new InMemoryHaircutRepository();
    const createHaircutUseCase = new CreateHaircutUseCase(haircutRepository);

    const requestData = {
      name: 'Test Haircut',
      price: 50,
    };

    await createHaircutUseCase.execute(requestData);

    const createdHaircut = await haircutRepository.findByName(requestData.name);
    if(!createdHaircut) throw new AppError(400, '')
    expect(createdHaircut).toBeDefined();
    expect(createdHaircut.name).toBe(requestData.name);
    expect(createdHaircut.price).toBe(requestData.price);
  });
});
