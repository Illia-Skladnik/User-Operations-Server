import { User } from "../models/user";

export const isSubordinate = async (token: string, subordinateId: number) => {
  const foundBoss = await User.findOne({token: token});

  if (foundBoss?.role === 'admin') {
    return true;
  }

  return foundBoss?.subordinatesId?.includes(subordinateId);
};