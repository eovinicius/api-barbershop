import { describe, expect, it } from 'vitest';
import { InMemoryUserRepository } from '../../repositories/inMemory/InMemoryUserRepository';
import { CreateUserUseCase } from './createUserUseCase';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';
import { AppError } from '../../../../shared/error/AppError';

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

  it('should hash user password upon registration', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const createUserUseCase = new CreateUserUseCase(userRepository, providerCrypto);

    const user = {
      id: '1',
      name: 'Test User',
      password: 'password123',
      email: 'test@example.com',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    await createUserUseCase.execute(user);

    const createdUser = await userRepository.findByEmail(user.email);
    if (!createdUser) throw new AppError(400, 'usuario nao encontrado');
    const isPasswordCorrectlyHashed = await providerCrypto.compare(user.password, createdUser.password);

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it('should prevent the creation of a user with a duplicate email', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const createUserUseCase = new CreateUserUseCase(userRepository, providerCrypto);

    const user1 = {
      id: '1',
      name: 'User 1',
      password: 'password123',
      email: 'user1@example.com',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    await createUserUseCase.execute(user1);

    const user2 = {
      id: '1',
      name: 'User 2',
      password: 'anotherpassword',
      email: 'user1@example.com',
      phone: '9876543210',
      created_at: new Date(),
      updated_at: new Date(),
    };

    await expect(createUserUseCase.execute(user2)).rejects.toThrowError('email already registered');
  });
});
