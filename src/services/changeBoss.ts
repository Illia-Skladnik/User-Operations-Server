import {v4 as uuidv4} from 'uuid';
import { deleteUsersBoss } from './deleteUsersBoss';
import { User } from '../models/user';

export const changeBossService = async (token: string, subordinateId: string, newBossId: string) => {
  await deleteUsersBoss(subordinateId);

  const currentUser = await User.findOne({ token: token })
  if (!currentUser) {
    return false;
  }

  currentUser.token = uuidv4();
  currentUser.save();

  const subordinate = await User.findById(subordinateId)
  if (!subordinate) {
    return false;
  }

  subordinate.bossId = [newBossId];
  subordinate.save();

  const newBoss = await User.findById(newBossId)
  if (!newBoss || !newBoss.bossId) {
    return false;
  }

  if (newBoss.role === 'user') {
    newBoss.bossId = [];
    newBoss.role = 'boss';
  }

  newBoss.subordinatesId?.push(subordinateId);
  newBoss.save();

  return currentUser;
};

