import {v4 as uuidv4} from 'uuid';
import { User } from '../models/user';

export const infoService = async (token: string) => {

  let user = await User.findOne({token: token});

  if (user) {
    user.token = uuidv4();
  } else {
    return false;
  };

  user?.save();
  
  const foundRole = user.role;

  switch (foundRole) {
    case 'user':
      return user;
    
    case 'admin':
      const allUsers = await User.find();
      return allUsers;

    case 'boss':
      {
        const subordinatesId = user.subordinatesId;
        const subordinates = await User.find({id: { $in: subordinatesId}});
        return [user, ...subordinates];
      };

    default:
      throw new Error('Wrong id')
  }
};
