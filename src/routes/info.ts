import express = require('express');

import { infoController } from "../controllers/info";

export const infoRouter = express.Router();
infoRouter.get('/:token', infoController);