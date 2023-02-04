import { getAllUsers } from "./getAllUsers";

export const infoService = async (userId: any) => {
  const allUsers = await getAllUsers();
  allUsers.forEach((user: any) => delete user.password);
  const foundUser = allUsers.find((user: any) => +user.id === +userId)

  if (!foundUser) {
    return false;
  }
  
  const foundRole = foundUser.role;


  switch (foundRole) {
    case 'user':
      return foundUser;
    
    case 'admin':
      return allUsers;

    case 'boss':
      {
        const subordinatesId = foundUser.subordinatesId;
        const subordinates = allUsers.filter((user: any) => subordinatesId.includes(user.id));
        return [foundUser, ...subordinates];
      };

    default:
      throw new Error('Wrong id')
  }
};
