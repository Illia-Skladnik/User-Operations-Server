import {v4 as uuidv4} from 'uuid';
import { User } from "../models/user";

export const setAdminService = async (token: string, newAdminId: string) => {
  const foundUser = await User.findOne({id: newAdminId});
  if (!foundUser) {
    return false;
  }
  foundUser.role = 'admin';
  foundUser.bossId = [];
  await foundUser.save();

  const currentAdmin = await User.findOne({token: token});
  if (!currentAdmin) {
    return false;
  }
  currentAdmin.token = uuidv4();
  await currentAdmin.save()

  return currentAdmin;
};
