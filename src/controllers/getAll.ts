import { Request, Response } from 'express';
import { getAllUsers } from '../services/getAllUsers';

export const getAllController = async(req: Request, res: Response) => {
  const response = await getAllUsers();

  res.send(response);
};