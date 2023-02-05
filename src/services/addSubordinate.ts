import * as path from 'path';
import { getAllUsers } from "./getAllUsers";
import * as fs from 'fs/promises';
import { CommonPerson } from '../types/User';

export const addSubordinate = async (subordinateId: number, bossId: number) => {
  const allUsers = await getAllUsers();
  const foundBoss = allUsers.find((person: CommonPerson) => person.id === bossId);
  foundBoss.subordinatesId.push(subordinateId);
  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(allUsers);
  await fs.writeFile(filePath, string);
};