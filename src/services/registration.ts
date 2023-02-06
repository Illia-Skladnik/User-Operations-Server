import {v4 as uuidv4} from 'uuid';
import { User } from "../modules/personConstructor";
import { addSubordinate } from "./addSubordinate";
import { getMaxID } from "./getMaxID";
import * as bcrypt from 'bcrypt';

export const registrationService = async (name: string, email: string, bossId: number, password: string) => {
  const hash = await bcrypt.hash(password, 10);
  const maxID = await getMaxID();
  const id = maxID + 1;
  const token = uuidv4();
  const newUser = new User(id, name, email, bossId, hash, token);
  await addSubordinate(id, bossId);
  newUser.registerUser();


  return newUser;
};
