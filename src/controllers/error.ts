import { Request, Response } from 'express';

export const errorController = async(req: Request, res: Response) => {
  res.status(404);
  res.json('Wrong path. Please, try another.');
};