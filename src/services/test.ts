import { getAllUsers } from "./getAllUsers";

export const testService = async () => {
  const allUsers = await getAllUsers();
  
  return allUsers;
};
