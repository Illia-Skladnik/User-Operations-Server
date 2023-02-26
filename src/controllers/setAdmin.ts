import { Request, Response } from 'express';
import { setAdminService } from '../services/setAdmin';
import { isAdmin } from '../validators/isAdmin';
import { isValidId } from '../validators/isValidId';
import { isValidToken } from '../validators/isValidToken';

export const setAdminController = async(req: Request, res: Response) => {
  const { token, newAdminId } = req.body;

  if (!await isValidToken(token)) {
    res.status(498);
    res.send('Invalid token')

    throw new Error('Invalid token')
  }

  if (!await isAdmin(token)) {
    res.status(403);
    res.send('You are not admin :(')

    throw new Error('You are not admin :(')
  }

  if (!(await isValidId(newAdminId))) {;
    res.status(404);
    res.send('Wrong boss')

    throw new Error('Wrong boss')
  }
  
  const response = await setAdminService(token, newAdminId);

  if (!response) {
    res.sendStatus(404);

    throw new Error('Wrong subordinate');
  }

  res.status(200);
  res.send(response);
};