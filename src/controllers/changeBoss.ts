import { changeBossService } from '../services/changeBoss';
import { Request, Response } from 'express';
import { isValidToken } from '../validators/isValidToken';
import { isSubordinate } from '../validators/isSubordinate';
import { isValidId } from '../validators/isValidId';
import { isBoss } from '../validators/isBoss';

export const changeBossController = async(req: Request, res: Response) => {
  const { token, subordinateId, newBossId } = req.body;

  if (!(await isValidToken(token))) {
    res.status(498);
    res.send('Invalid token')

    throw new Error('Invalid token')
  }

  if (await isBoss(token)) {
    res.status(403);
    res.send('You\'re not a boss :( At least for now.')

    throw new Error('You\'re not a boss :( At least for now.')
  }

  if (!(await isValidId(newBossId))) {;
    res.status(404);
    res.send('Wrong boss')

    throw new Error('Wrong boss')
  }

  if (!(await isSubordinate(token, subordinateId))) {
    res.status(404);
    res.send('Wrong subordinate')

    throw new Error('Wrong subordinate')
  }

  const response = await changeBossService(token, subordinateId, newBossId);
    
  if(!response) {
    res.sendStatus(404);

    return;
  }

  res.json(response);
};