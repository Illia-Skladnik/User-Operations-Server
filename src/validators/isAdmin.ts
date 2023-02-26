import { User } from "../models/user";

export const isAdmin = async (token: string) => {
  const user = await User.findOne({token: token});

  return user?.role === 'admin';
};