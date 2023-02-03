import { getAllUsers } from "./getAllUsers";

export const getMaxID = async () => {
  const users = await getAllUsers();
  const usersId = users.map((user: any) => user.id);
  const maxID = Math.max(...usersId);

  return maxID;
};