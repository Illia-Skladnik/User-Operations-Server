import { User } from "../modules/personConstructor";
import { getMaxID } from "./getMaxID";

export const registrationService = async (name: any, email: any, bossId: any, passWord: any) => {
  const maxID = await getMaxID();
  const id = maxID + 1;
  const newUser = new User(id, name, email, bossId, passWord);
  newUser.registerUser();

  return newUser;
};
