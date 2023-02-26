import * as express from 'express';
import { changeBossController } from "../controllers/changeBoss";
import { setAdminController } from "../controllers/setAdmin";

export const functionsRouter = express.Router();
functionsRouter.post('/changeBoss', changeBossController);
functionsRouter.post('/setAdmin', setAdminController);
