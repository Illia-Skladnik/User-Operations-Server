import { infoService } from "../services/info";
import { Request, Response } from 'express';

export const infoController = async(req: Request, res: Response) => {
  const { userId } = req.params;
  const response = await infoService(userId);

  if(!response) {
    res.sendStatus(404);

    return;
  }

  res.json(response);
};