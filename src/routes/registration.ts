import express = require('express');

import { registrationController } from "../controllers/registration";

export const registrationRouter = express.Router();
registrationRouter.post('/:name/:email/:bossId/:password', registrationController);
