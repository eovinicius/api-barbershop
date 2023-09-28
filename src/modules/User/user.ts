export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
}

export class User {
  private props: IUser;

  constructor(props: IUser) {
    this.props = props;
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
