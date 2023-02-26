import * as bcrypt from 'bcrypt';
import { User } from "../models/user";

export const authenticationService = async (email: string, password: string) => {
  const user = await User.findOne({email: email});

  if (!user) {
    return null;
  }

  return bcrypt.compare(password, user.password);;
};