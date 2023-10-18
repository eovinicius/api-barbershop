import { randomUUID } from 'crypto';

export type CustomerProps = {
  name: string;
  password: string;
  email: string;
  phone: string;
};

export class Customer {
  public id: string;
  public name: string;
  public email: string;
  public phone: string;
  public password: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: CustomerProps) {
    this.id = randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.phone = props.phone;
    this.password = props.password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
