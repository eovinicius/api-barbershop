import { describe, expect, it } from 'vitest';
import { InMemoryUserRepository } from '../../repositories/inMemory/InMemoryUserRepository';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';
import { CreateUserUseCase } from './../create/createUserUseCase';

describe('AuthenticateUserUseCase', () => {
  it('should authenticate a user with correct email and password', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const createUserUseCase = new CreateUserUseCase(userRepository, providerCrypto);
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    const user = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    await createUserUseCase.execute(user);

    const authenticationResult = await authenticateUserUseCase.execute({
      email: 'johndoe@example.com',
      password: 'password123',
    });

    expect(authenticationResult.token).toBeTruthy();
    expect(authenticationResult.user).toEqual({ name: 'John Doe', email: 'johndoe@example.com' });
  });

  it('should throw an error when trying to authenticate with incorrect email', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    await expect(
      authenticateUserUseCase.execute({
        email: 'nonexistent@example.com',
        password: 'password123',
      }),
    ).rejects.toThrowError('email or password incorrect!');
  });

  it('should throw an error when trying to authenticate with incorrect password', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    const user = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    await userRepository.create(user);

    await expect(
      authenticateUserUseCase.execute({
        email: 'janesmith@example.com',
        password: 'incorrectpassword',
      }),
    ).rejects.toThrowError('email or password incorrect!');
  });
});
