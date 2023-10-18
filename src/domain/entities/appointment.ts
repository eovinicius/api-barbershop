import { randomUUID } from 'crypto';
import { Haircut } from './haircut';

export type AppointmentProps = {
  id_customer: string;
  id_barber: string;
  haircut_date: string;
};

export class Appointment {
  public id: string;
  public id_customer: string;
  public id_barber: string;
  public haircut_date: string;
  public created_at: Date;
  public Haircuts?: Haircut[];

  constructor(props: AppointmentProps) {
    this.id = randomUUID();
    this.id_customer = props.id_customer;
    this.id_barber = props.id_barber;
    this.haircut_date = props.haircut_date;
    this.created_at = new Date();
    this.Haircuts = [];
  }
}
