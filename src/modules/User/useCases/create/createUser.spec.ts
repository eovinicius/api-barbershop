import { describe, expect, it } from 'vitest';
import { InMemoryUserRepository } from '../../repositories/inMemory/InMemoryUserRepository';
import { CreateUserUseCase } from './createUserUseCase';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';

describe('CreateUserUseCase', () => {
  it('should create a new user successfully', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const createUserUseCase = new CreateUserUseCase(userRepository, providerCrypto);

    const user = {
      name: 'Test User',
      password: 'password123',
      email: 'test@example.com',
      phone: '1234567890',
    };

    await createUserUseCase.execute(user);

    const createdUser = await userRepository.findByEmail(user.email);
    expect(createdUser).not.toBeNull();
  });
});
