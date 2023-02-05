import * as path from 'path';
import * as fs from 'fs/promises';
import { getAllUsers } from "./getAllUsers";
import {v4 as uuidv4} from 'uuid';
import { CommonPerson } from '../types/User';
import { deleteUsersBoss } from './deleteUsersBoss';

export const changeBossService = async (token: string, subordinateId: number, newBossId: number) => {
  await deleteUsersBoss(subordinateId);
  let allUsers = await getAllUsers();
  const foundOldBoss = allUsers.find((person: CommonPerson) => person.token === token);
  foundOldBoss.token = uuidv4();

  const foundSubordinate = allUsers.find((person: CommonPerson) => person.id === subordinateId);
  foundSubordinate.bossId = newBossId;

  const foundNewBoss = allUsers.find((person: CommonPerson) => person.id === newBossId);

  if (foundNewBoss.role === 'user') {
    delete foundNewBoss.bossId;
    foundNewBoss.subordinatesId = [];
    foundNewBoss.role = 'boss';
  }

  foundNewBoss.subordinatesId.push(subordinateId);

  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(allUsers);
  await fs.writeFile(filePath, string);

  return foundOldBoss;
};
