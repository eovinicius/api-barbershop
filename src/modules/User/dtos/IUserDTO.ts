export interface IUserDTO {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreateDTO {
  id?: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  created_at?: Date;
  updated_at?: Date;
}
