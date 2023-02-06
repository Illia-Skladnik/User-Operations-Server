import * as types from '../types/User';
import { addUser } from '../services/addUser';

abstract class Person implements types.Person {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    token: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.token = token;
  }
}

export class User extends Person implements types.User {
  role = 'user';
  bossId: number;

  constructor(
    id: number,
    name: string,
    email: string,
    bossId: number,
    password: string,
    token: string,
  ) {
    super(id, name, email, password, token);
    this.bossId = bossId;
  }

  registerUser() {
    addUser(this);
  }
}

class Admin extends Person implements types.Admin {
  role = 'admin';

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    token: string,
  ) {
    super(id, name, email, password, token);
  }
}

class Boss extends Person implements types.Boss{
  role = 'boss';
  subordinatesId: number[];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    subordinatesId: number[],
    token: string,
  ) {
    super(id, name, email, password, token);
    this.subordinatesId = subordinatesId;
  }
}