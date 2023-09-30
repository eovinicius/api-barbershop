import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('User', () => {
  it('should create a user with a generated ID', () => {
    const user = new User({
      id: '12345',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      password: 'secret',
    });

    expect(user).toBeInstanceOf(User);

    expect(user.id).toBeDefined();
  });

  it('should return the correct user properties', () => {
    const data = {
      id: '12345',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      password: 'secret',
    };

    const user = new User(data);

    expect(user.name).toBe(data.name);
    expect(user.email).toBe(data.email);
    expect(user.phone).toBe(data.phone);
    expect(user.password).toBe(data.password);
  });
});
