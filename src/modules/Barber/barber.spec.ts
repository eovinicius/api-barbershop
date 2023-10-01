import { describe, expect, it } from 'vitest';
import { Barber } from './barber';

describe('barber', () => {
  it('should create a barber with a generated ID', () => {
    const barber = new Barber({
      name: 'wesley santos',
      photo: 'urldafoto'
    });

    expect(barber).toBeInstanceOf(Barber);
    expect(barber.id).toBeDefined();
  });
});
