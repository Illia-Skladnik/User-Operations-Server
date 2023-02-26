import { User } from "../models/user";

export const deleteUsersBoss = async (subordinateId: string) => {
  const user = await User.findById(subordinateId);

  await User.updateOne( 
    { id: user?.bossId }, 
    { $pull: { subordinatesId: subordinateId } } 
  )
};
