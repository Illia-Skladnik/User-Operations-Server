import { getAllUsers } from "../services/getAllUsers";

export const isValidBossID = (async (bossID: any) => {
  const users = await getAllUsers();
  const usersFiltered = users.filter((person: any) => person.role === 'boss');
  
  return usersFiltered.some((person: any) => +person.id === +bossID);
  // проверить типы выше и протипизировать правильно
});