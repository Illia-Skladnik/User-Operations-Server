import { CommonPerson } from "../types/User";
import { getAllUsers } from "./getAllUsers";
import * as fs from 'fs/promises';
import * as path from 'path';

export const deleteUsersBoss = async (subordinateId: number) => {
  const users = await getAllUsers();
  const user = users.find((person: CommonPerson) => person.id === subordinateId);
  const usersBoss = users.find((person: CommonPerson) => person.id === user.bossId);
  const subordinates = usersBoss.subordinatesId;
  const newSubordinates = subordinates.filter((subordinate: number) => subordinate !== subordinateId);
  usersBoss.subordinatesId = newSubordinates;
  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(users);
  await fs.writeFile(filePath, string);
};
