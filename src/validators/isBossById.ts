import { User } from "../models/user";

export const isBossById = async(id: string) => {
  const user = await User.findById(id);
  if (!user) {
    return false;
  }

  return user.role === 'boss';
};
