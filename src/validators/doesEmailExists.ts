import { getAllUsers } from "../services/getAllUsers";

export const doesEmailExists = async (email: string) => {
  const users = await getAllUsers();

  return users.some((person: any) => person.email === email);
};