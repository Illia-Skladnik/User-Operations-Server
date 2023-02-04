import { getAllUsers } from "./getAllUsers";

export const authenticationService = async (email: string, password: string) => {
  const allUsers = await getAllUsers();
  const foundUser = allUsers.find((user: any) => user.email === email);

  if (!foundUser) {
    return null;
  }

  return foundUser.password === password;
};