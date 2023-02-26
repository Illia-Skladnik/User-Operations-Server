import * as express from 'express';
import { infoController } from "../controllers/info";

export const infoRouter = express.Router();
infoRouter.post('/', infoController);