import { Request, Response } from 'express';
import { setAdminService } from '../services/setAdmin';
import { isAdmin } from '../validators/isAdmin';
import { isValidToken } from '../validators/isValidToken';

export const setAdminController = async(req: Request, res: Response) => {
  const { token, newAdminId } = req.params;

  if (!await isValidToken(token)) {
    res.sendStatus(498);

    throw new Error('Invalid token')
  }

  if (!await isAdmin(token)) {
    res.sendStatus(403);

    throw new Error('You are not admin :(')
  }
  
  const response = await setAdminService(token, +newAdminId);

  if (!response) {
    res.sendStatus(404);

    throw new Error('Wrong subordinate');
  }

  res.status(200);
  res.send(response);
};