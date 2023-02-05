import { registrationService } from "../services/registration";
import { Request, Response } from 'express';
import { isValidBossID } from "../validators/isValidBossID";
import { isValidName } from "../validators/isValidName";
import { isValidEmail } from "../validators/isValidEmail";
import { isValidPassword } from "../validators/isValidPassword";
import { doesEmailExists } from "../validators/doesEmailExists";

export const registrationController = async(req: Request, res: Response) => {
  const { name, email, bossId, password } = req.params;
  const bossIdValidation = await isValidBossID(+bossId);

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

  if (!isValidPassword(password)) {
    res.sendStatus(422);
    throw new Error('Too weak password');
  }

  if (await doesEmailExists(email)) {
    res.sendStatus(409);
    throw new Error('This email is already registered');
  }
  
  const newUser = await registrationService(name, email, +bossId, password);

  res.statusCode = 201;
  res.send(newUser);
};