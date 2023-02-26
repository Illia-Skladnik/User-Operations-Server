import { User } from '../models/user';

export const addSubordinate = async (subordinateId: number, bossId: string) => {
  // const foundBoss = await User.findOne({id: bossId});
  const foundBoss = await User.findById(bossId);
  if (foundBoss && foundBoss.subordinatesId) {
    foundBoss.subordinatesId.push(subordinateId);
  }
  foundBoss?.save();
};