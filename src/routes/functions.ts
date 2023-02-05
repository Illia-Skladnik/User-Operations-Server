import express = require('express');
import { changeBossController } from "../controllers/changeBoss";
import { setAdminController } from "../controllers/setAdmin";

export const functionsRouter = express.Router();
functionsRouter.get('/changeBoss/:token/:subordinateId/:newBossId', changeBossController);
functionsRouter.get('/setAdmin/:token/:newAdminId', setAdminController);
