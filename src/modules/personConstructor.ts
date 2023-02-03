import * as types from '../types/User';
import { getMaxID } from '../services/getMaxID';
import { getAllUsers } from '../services/getAllUsers';
import * as fs from 'fs/promises';
import * as path from 'path';
import { addUser } from '../services/addUser';

abstract class Person implements types.Person {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
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
  ) {
    super(id, name, email, password);
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
  ) {
    super(id, name, email, password);
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
  ) {
    super(id, name, email, password);
    this.subordinatesId = subordinatesId;
  }
}