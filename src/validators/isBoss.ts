import { getAllUsers } from "../services/getAllUsers";
import { CommonPerson } from "../types/User";

export const isBoss = (async(token: string) => {
  const users = await getAllUsers();
  const foundUser = users.find((user: CommonPerson) => user.token === token);
  return foundUser.role === 'user';
});
