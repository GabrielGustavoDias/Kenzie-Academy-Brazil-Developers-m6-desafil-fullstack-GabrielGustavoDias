export interface IContact {
  completeName: string;
  cellphone: string;
  email: string;
  password: string;
  registerDate: Date;
}

export interface IContactReturn {
  id: string;
  completeName: string;
  cellphone: string;
  email: string;
  client: object;
  registerDate: Date;
}
