import { randomUUID } from 'crypto';

export interface IBarber {
  id: string;
  name: string;
  photo: string;
}

export class Barber {
  private props: IBarber;

  constructor(props: Omit<IBarber, 'id'>) {
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

  get photo(): string {
    return this.props.photo;
  }
}
