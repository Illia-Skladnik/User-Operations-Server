import { registrationService } from "../services/registration";
import { Request, Response } from 'express';
import { isValidBossID } from "../validators/isValidBossID";
import { isValidName } from "../validators/isValidName";
import { isValidEmail } from "../validators/isValidEmail";
import { isValidPassword } from "../validators/isValidPassword";

export const registrationController = async(req: Request, res: Response) => {
  const { name, email, bossId, passWord } = req.params;
  const bossIdValidation = await isValidBossID(bossId);

  if (!bossIdValidation) {
    res.sendStatus(422);
    throw new Error('No boss with current ID');
  }

  if (!isValidName(name)) {
    res.sendStatus(422);
    throw new Error('Name can\'t be empty');
  }

  if (!isValidEmail(email)) {
    res.sendStatus(422);
    throw new Error('Invalid email');
  }

  if (!isValidPassword(passWord)) {
    res.sendStatus(422);
    throw new Error('Too weak password');
  }
  
  const newUser = await registrationService(name, email, bossId, passWord);

  res.statusCode = 201;
  res.send(newUser);
};