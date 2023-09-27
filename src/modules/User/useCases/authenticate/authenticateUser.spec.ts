import { describe, expect, it } from 'vitest';
import { InMemoryUserRepository } from '../../repositories/inMemory/InMemoryUserRepository';
import { ProviderCrypto } from '../../provider/bcrypt/providerCrypto';
import { AppError } from '../../../../shared/error/AppError';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';

describe('AuthenticateUserUseCase', () => {
  it('should authenticate a user with correct email and password', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    // Crie um usuário de exemplo
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Registre o usuário no repositório
    await userRepository.create(user);

    await providerCrypto.compare()


    // Tente autenticar o usuário
    const authenticationResult = await authenticateUserUseCase.execute({
      email: 'johndoe@example.com',
      password: 'password123', // Senha correta
    });

    // Verifique se a autenticação foi bem-sucedida e o token foi retornado
    expect(authenticationResult.token).toBeTruthy();
    expect(authenticationResult.user).toEqual({ name: 'John Doe', email: 'johndoe@example.com' });
  });

  it('should throw an error when trying to authenticate with incorrect email', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    // Tente autenticar com um email incorreto que não existe no repositório
    await expect(
      authenticateUserUseCase.execute({
        email: 'nonexistent@example.com', // Email incorreto
        password: 'password123',
      }),
    ).rejects.toThrowError('email or password incorrect!');
  });

  it('should throw an error when trying to authenticate with incorrect password', async () => {
    const userRepository = new InMemoryUserRepository();
    const providerCrypto = new ProviderCrypto();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, providerCrypto);

    // Crie um usuário de exemplo com uma senha diferente
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phone: '1234567890',
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Registre o usuário no repositório
    await userRepository.create(user);

    // Tente autenticar com a senha incorreta
    await expect(
      authenticateUserUseCase.execute({
        email: 'janesmith@example.com',
        password: 'incorrectpassword', // Senha incorreta
      }),
    ).rejects.toThrowError('email or password incorrect!');
  });
});
