import { randomUUID } from 'crypto';

export type HaircutProps = {
  name: string;
  price: number;
};

export class Haircut {
  public id: string;
  public name: string;
  public price: number;

  constructor(props: HaircutProps) {
    this.id = randomUUID();
    this.name = props.name;
    this.price = props.price;
  }
}
