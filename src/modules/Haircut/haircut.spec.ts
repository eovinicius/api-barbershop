import { describe, expect, it } from 'vitest';
import { Haircut, IHaircut } from './haircut';

describe('haircut', () => {
  it('should create a haircut with a generated ID', () => {
    const haircut = new Haircut({
      name: 'navalhado',
      price: 30,
    });

    expect(haircut).toBeInstanceOf(Haircut);
    expect(haircut.id).toBeDefined();
  });
});
