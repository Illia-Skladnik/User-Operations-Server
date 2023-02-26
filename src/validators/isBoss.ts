import { User } from "../models/user";

export const isBoss = async(token: string) => {
  const user = await User.findOne({token: token});
  if (!user) {
    return false;
  }

  return user.role === 'user';
};
