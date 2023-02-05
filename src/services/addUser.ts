import * as fs from 'fs/promises';
import * as path from 'path';
import { CommonPerson } from '../types/User';
import { getAllUsers } from './getAllUsers';

export const addUser = async(newUser: CommonPerson) => {
  const allUsers = await getAllUsers();
  const newAllUsers = [...allUsers, newUser];
  const filePath = path.resolve('./', 'users.json');
  const string = JSON.stringify(newAllUsers);
  await fs.writeFile(filePath, string);
};
