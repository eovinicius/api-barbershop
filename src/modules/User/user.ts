import { randomUUID } from 'crypto';

export type IUser = {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
};

export class User {
  private props: IUser;

  constructor(props: Omit<IUser, 'id'>) {
    this.props = {
      id: randomUUID(),
      ...props,
    };
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get password(): string {
    return this.props.password;
  }

  get email(): string {
    return this.props.email;
  }

  get phone(): string {
    return this.props.phone;
  }
}
