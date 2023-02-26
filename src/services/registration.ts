import {v4 as uuidv4} from 'uuid';
import { addSubordinate } from "./addSubordinate";
import * as bcrypt from 'bcrypt';
import { User } from '../models/user'

export const registrationService = async (name: string, email: string, bossId: string, userPass: string) => {
  const password = await bcrypt.hash(userPass, 10);
  const token = uuidv4();
  const role = 'user';
  const newUser = new User({name, email, bossId: bossId, password, token, role});
  await addSubordinate(newUser.id, bossId);

  return newUser;
};
