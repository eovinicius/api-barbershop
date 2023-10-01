import { randomUUID } from 'crypto';

export interface IHaircut {
  id: string;
  name: string;
  price: number;
}

export class Haircut {
  private props: IHaircut;

  constructor(props: Omit<IHaircut, 'id'>) {
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

  get price(): number {
    return this.props.price;
  }
}
