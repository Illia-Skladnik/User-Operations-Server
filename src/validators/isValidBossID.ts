import { getAllUsers } from "../services/getAllUsers";
import { CommonPerson } from "../types/User";

export const isValidBossID = (async (bossID: number) => {
  const users = await getAllUsers();
  const usersFiltered = users.filter((person: CommonPerson) => person.role !== 'admin');
  
  return usersFiltered.some((person: CommonPerson) => +person.id === +bossID);
});