export interface IClient {
  completeName: string;
  cellphone: string;
  email: string;
  password: string;
  registerDate: Date;
}

export interface IClientReturn {
  id: string;
  completeName: string;
  cellphone: string;
  email: string;
  registerDate: Date;
  updateAt: Date;
}
