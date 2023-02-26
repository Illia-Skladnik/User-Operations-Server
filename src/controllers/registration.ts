import { registrationService } from "../services/registration";
import { Request, Response } from 'express';
import { isValidId } from "../validators/isValidId";
import { isValidName } from "../validators/isValidName";
import { isValidEmail } from "../validators/isValidEmail";
import { isValidPassword } from "../validators/isValidPassword";
import { doesEmailExists } from "../validators/doesEmailExists";
import { isBossById } from "../validators/isBossById";

export const registrationController = async(req: Request, res: Response) => {
  const { name, email, bossId, userPass } = req.body;

  if (!(await isValidId(bossId))) {
    res.status(422);
    res.send('Wrong Id')

    throw new Error('Wrong Id')
  }

  if (!(await isBossById(bossId))) {
    res.status(400);
    res.send('Given user is not a boss')

    throw new Error('Given user is not a boss')
  }

  if (!isValidName(name)) {
    res.status(422);
    res.send('Name can\'t be empty')

    throw new Error('Name can\'t be empty')
  }

  if (!isValidEmail(email)) {
    res.status(422);
    res.send('Invalid email')

    throw new Error('Invalid email')
  }

  if (!isValidPassword(userPass)) {
    res.status(422);
    res.send('Too weak password')

    throw new Error('Too weak password')
  }

  if (await doesEmailExists(email)) {
    res.status(409);
    res.send('This email is already registered')

    throw new Error('This email is already registered')
  }
  
  const newUser = await registrationService(name, email, bossId, userPass);

  await newUser.save((err, newUser) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  res.statusCode = 201;
  res.send(newUser);
};