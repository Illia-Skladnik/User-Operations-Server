import express = require('express');
import { changeBossController } from "../controllers/changeBoss";

export const functionsRouter = express.Router();
functionsRouter.get('/changeBoss/:token/:subordinateId/:newBossId', changeBossController);
