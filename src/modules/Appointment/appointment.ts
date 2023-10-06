import { randomUUID } from 'crypto';
import { IHaircut } from '../Haircut/haircut';

export type IAppointment = {
  id: string;
  idUser: string;
  idBarber: string;
  haircutDate: Date;
  createdAt: Date;
  Haircuts: IHaircut[];
};

export class Appointment {
  private props: IAppointment;

  constructor(props: Omit<IAppointment, 'id'>) {
    this.props = {
      id: randomUUID(),
      ...props,
    };
  }

  get id(): string {
    return this.props.id;
  }

  get idUser(): string {
    return this.props.idUser;
  }

  get idBarber(): string {
    return this.props.idBarber;
  }

  get haircutDate(): Date {
    return this.props.haircutDate;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get Haircuts(): IHaircut[] {
    return this.props.Haircuts;
  }
}
