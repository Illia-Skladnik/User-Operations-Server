import { User } from "../models/user";

export const getAllUsers = async () => {
  const data = User.find();

  return data;
};


