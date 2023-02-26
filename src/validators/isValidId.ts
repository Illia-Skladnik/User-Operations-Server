import { User } from "../models/user";

export const isValidId = async (id: any) => {
  try {
    await User.findById(id);
    return true;
  } catch {
    return false;
  }
};