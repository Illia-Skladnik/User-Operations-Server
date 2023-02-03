import { testService } from "../services/test";
import { Request, Response } from 'express';
import { User } from "../modules/personConstructor";

export const testController = async(req: Request, res: Response) => {
  const ress = await testService();

  if(!ress) {
    res.sendStatus(404);

    return;
  }

  res.json(ress);
};