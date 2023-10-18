import { randomUUID } from 'crypto';

export type BarberProps = {
  name: string;
  photo: string;
};

export class Barber {
  public id: string;
  public name: string;
  public photo: string;

  constructor(props: BarberProps) {
    this.id = randomUUID();
    this.name = props.name;
    this.photo = props.photo;
  }
}
