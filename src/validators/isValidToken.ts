import { User } from "../models/user";

export const isValidToken = async (token: string) => {
  const user = await User.findOne({token: token});

  return !!user;
};