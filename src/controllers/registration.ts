import { registrationService } from "../services/registration";
import { Request, Response } from 'express';
import { isValidBossID } from "../validators/isValidBossID";

export const registrationController = async(req: Request, res: Response) => {
  const { name, email, bossId, passWord } = req.params;
  const bossIdValidation = await isValidBossID(bossId);

  if (!bossIdValidation) {
    res.sendStatus(404);
    throw new Error('No boss with current ID');
  }
  
  const ress = await registrationService(name, email, bossId, passWord);
  

  if(!ress) {
    res.sendStatus(404);

    return;
  }

  res.sendStatus(201);
};