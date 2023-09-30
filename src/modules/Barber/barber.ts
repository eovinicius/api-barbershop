export interface IBarber {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

export class Barber {
  private props: IBarber;

  constructor(props: IBarber) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get phone(): string {
    return this.props.phone;
  }

  get email(): string {
    return this.props.email;
  }
}
