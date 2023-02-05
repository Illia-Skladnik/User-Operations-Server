import * as path from 'path';
import * as fs from 'fs/promises';
import { getAllUsers } from "./getAllUsers";
import {v4 as uuidv4} from 'uuid';
import { CommonPerson } from '../types/User';

export const changeBossService = async (token: string, subordinateId: number, newBossId: number) => {
  const allUsers = await getAllUsers();
  const foundOldBoss = allUsers.find((person: CommonPerson) => person.token === token);
  foundOldBoss.token = uuidv4();

  if (foundOldBoss.role !== 'boss') {
    return false;
  }

  const filteredSubordinates = foundOldBoss.subordinatesId.filter((subordinate: number) => subordinate !== subordinateId);
  foundOldBoss.subordinatesId = filteredSubordinates;

  const foundSubordinate = allUsers.find((person: CommonPerson) => person.id === subordinateId);
  foundSubordinate.bossId = newBossId;

  const foundNewBoss = allUsers.find((person: CommonPerson) => person.id === newBossId);
  foundNewBoss.subordinatesId.push(subordinateId);

  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(allUsers);
  await fs.writeFile(filePath, string);

  return foundOldBoss;
};
