import { getAllUsers } from "../services/getAllUsers";
import { CommonPerson } from "../types/User";

export const isValidToken = async (token: string) => {
  const users = await getAllUsers();

  return users.some((user: CommonPerson) => user.token === token);
};