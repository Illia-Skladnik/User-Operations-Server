import { User } from "../modules/personConstructor";
import { addSubordinate } from "./addSubordinate";
import { getMaxID } from "./getMaxID";

export const registrationService = async (name: string, email: string, bossId: any, passWord: string) => {
  const maxID = await getMaxID();
  const id = maxID + 1;
  const newUser = new User(id, name, email, bossId, passWord);
  await addSubordinate(id, bossId);
  newUser.registerUser();


  return newUser;
};
