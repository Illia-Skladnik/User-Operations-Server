import { authenticationService } from "../services/authentication";
import { Request, Response } from 'express';

export const authenticationController = async(req: Request, res: Response) => {
  const { email, password } = req.params;

  const authenticationResult = await authenticationService(email, password);

  if (authenticationResult === null) {
    res.sendStatus(400);
  }

  if (!authenticationResult) {
    res.sendStatus(401);
  }

  res.status(200);
  res.send(authenticationResult);
};