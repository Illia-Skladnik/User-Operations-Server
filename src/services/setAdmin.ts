import { CommonPerson } from "../types/User";
import { getAllUsers } from "./getAllUsers";
import * as path from 'path';
import * as fs from 'fs/promises';
import {v4 as uuidv4} from 'uuid';

export const setAdminService = async (token: string, newAdminId: number) => {
  const users = await getAllUsers();
  const foundUser = users.find((person: CommonPerson) => person.id === newAdminId);

  if (foundUser.role !== 'user') {
    return false;
  };

  const currentAdmin = users.find((person: CommonPerson) => person.token === token);
  currentAdmin.token = uuidv4();

  foundUser.role = 'admin';
  delete foundUser.bossId;
  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(users);
  await fs.writeFile(filePath, string);

  return currentAdmin;
};
