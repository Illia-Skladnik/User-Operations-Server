export interface Person {
  id: number;
  name: string;
  email: string;
  password?: string;
  token: string;
};

export interface User extends Person {
  bossId: number;
  role: string;
}

export interface Admin extends Person {
  role: string;
}

export interface Boss extends Person {
  subordinatesId: number[];
  role: string;
}

export interface CommonPerson extends Person {
  bossId?: number;
  subordinatesId?: number[];
  role: string;
}