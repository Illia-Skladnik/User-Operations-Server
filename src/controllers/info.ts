import { infoService } from "../services/info";
import { Request, Response } from 'express';
import { isValidToken } from "../validators/isValidToken";

export const infoController = async(req: Request, res: Response) => {
  const { token } = req.body;

  if (!await isValidToken(token)) {
    res.sendStatus(498);

    throw new Error('Invalid token')
  }

  const response = await infoService(token);
  

  if(!response) {
    res.sendStatus(404);

    throw new Error('error')
  }

  res.json(response);
};