import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('User', () => {
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    password: 'secret',
  };

  it('should create a user with a generated ID', () => {
    const user = new User(userData);

    expect(user).toBeInstanceOf(User);

    expect(user.getId()).toBeDefined();
  });

  it('should return the correct user properties', () => {
    const user = new User(userData);

    expect(user.getName()).toBe(userData.name);
    expect(user.getEmail()).toBe(userData.email);
    expect(user.getPhone()).toBe(userData.phone);
    expect(user.getPassword()).toBe(userData.password);
  });

  it('should return created at and updated at as Date objects', () => {
    const user = new User(userData);

    expect(user.getCreatedAt()).toBeInstanceOf(Date);
    expect(user.getUpdatedAt()).toBeInstanceOf(Date);
  });
});
