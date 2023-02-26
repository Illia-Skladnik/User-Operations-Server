import * as express from 'express';
import { getAllController } from "../controllers/getAll";

export const getAllRouter = express.Router();
getAllRouter.get('/', getAllController);

