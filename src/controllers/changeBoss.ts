import { changeBossService } from '../services/changeBoss';
import { Request, Response } from 'express';
import { isValidToken } from '../validators/isValidToken';
import { isSubordinate } from '../validators/isSubordinate';
import { isValidBossID } from '../validators/isValidBossID';
import { isBoss } from '../validators/isBoss';

export const changeBossController = async(req: Request, res: Response) => {
  const { token, subordinateId, newBossId } = req.params;

  if (!(await isValidToken(token))) {
    res.sendStatus(498);

    throw new Error('Invalid token')
  }

  if (await isBoss(token)) {
    res.sendStatus(403);
    throw new Error('You\'re not a boss :( At least for now.')
  }

  if (!(await isValidBossID(+newBossId))) {
    res.sendStatus(404);
    throw new Error('Given user is not a boss');
  }

  if (!(await isSubordinate(token, +subordinateId))) {
    res.sendStatus(404);

    return;
  }

  const response = await changeBossService(token, +subordinateId, +newBossId);

  if(!response) {
    res.sendStatus(404);

    return;
  }

  res.json(response);
};