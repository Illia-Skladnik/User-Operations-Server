import { CommonPerson } from "../types/User";
import { getAllUsers } from "./getAllUsers";
import * as bcrypt from 'bcrypt';

export const authenticationService = async (email: string, password: string) => {
  const allUsers = await getAllUsers();
  const foundUser = allUsers.find((user: CommonPerson) => user.email === email);

  if (!foundUser) {
    return null;
  }

  return bcrypt.compare(password, foundUser.password);;
};