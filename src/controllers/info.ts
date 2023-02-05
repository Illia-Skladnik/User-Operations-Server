import { infoService } from "../services/info";
import { Request, Response } from 'express';
import { isValidToken } from "../validators/isValidToken";

export const infoController = async(req: Request, res: Response) => {
  const { token } = req.params;

  if (!await isValidToken(token)) {
    res.sendStatus(498);

    return;
  }

  const response = await infoService(token);
  

  if(!response) {
    res.sendStatus(404);

    return;
  }

  res.json(response);
};