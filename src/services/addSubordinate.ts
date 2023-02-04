import * as path from 'path';
import { getAllUsers } from "./getAllUsers";
import * as fs from 'fs/promises';

export const addSubordinate = async (subordinateId: any, bossId: any) => {
  const allUsers = await getAllUsers();
  const foundBoss = allUsers.find((person: any) => +person.id === +bossId);
  // console.log(allUsers[0].id, subordinateId, bossId);
  foundBoss.subordinatesId.push(subordinateId);
  // console.log(foundBoss)
  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(allUsers);
  await fs.writeFile(filePath, string);
};