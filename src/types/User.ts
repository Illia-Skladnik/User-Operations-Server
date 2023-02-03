import { Roles } from "./Roles";

export interface Person {
  id: number;
  name: string;
  email: string;
  password: string;
};

export interface User extends Person {
  role: string;
  bossId: number;
}

export interface Admin extends Person {
  role: string;
}

export interface Boss extends Person {
  role: string;
  subordinatesId: number[];
}