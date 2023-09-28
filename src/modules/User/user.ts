import { randomUUID } from 'crypto';

interface IPropsUser {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export class User {
  private id: string;
  private name: string;
  private password: string;
  private phone: string;
  private email: string;
  private created_at: Date;
  private updated_at: Date;

  constructor({ name, email, phone, password }: IPropsUser) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  getUpdatedAt(): Date {
    return this.updated_at;
  }
}
