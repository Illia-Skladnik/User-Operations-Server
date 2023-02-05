import {v4 as uuidv4} from 'uuid';
import { getAllUsers } from "./getAllUsers";
import * as fs from 'fs/promises';
import * as path from 'path';
import { CommonPerson } from '../types/User';

export const infoService = async (token: string) => {
  const allUsers = await getAllUsers();
  allUsers.forEach((user: CommonPerson) => delete user.password);
  const foundUser = allUsers.find((user: CommonPerson) => user.token === token);
  foundUser.token = uuidv4();
  const filePath = path.resolve('./', 'users.json');
  const allUsersStringified = JSON.stringify(allUsers);
  await fs.writeFile(filePath, allUsersStringified);

  if (!foundUser) {
    return false;
  }
  
  const foundRole = foundUser.role;


  switch (foundRole) {
    case 'user':
      return foundUser;
    
    case 'admin':
      return allUsers;

    case 'boss':
      {
        const subordinatesId = foundUser.subordinatesId;
        const subordinates = allUsers.filter((user: CommonPerson) => subordinatesId.includes(user.id));
        return [foundUser, ...subordinates];
      };

    default:
      throw new Error('Wrong id')
  }
};
