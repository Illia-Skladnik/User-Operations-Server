import { getAllUsers } from "../services/getAllUsers";
import { CommonPerson } from "../types/User";

export const isSubordinate = async (token: string, subordinateId: number) => {
  const allUsers = await getAllUsers();
  const foundBoss = allUsers.find((person: CommonPerson) => person.token === token);

  return foundBoss.subordinatesId.includes(subordinateId);
};