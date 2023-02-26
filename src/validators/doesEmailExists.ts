import { User } from "../models/user";

export const doesEmailExists = async (email: string) => {
  const user = await User.findOne({email: email});

  return !!user;
};