import express = require('express');

import { registrationController } from "../controllers/registration";

export const registrationRouter = express.Router();
registrationRouter.get('/:name/:email/:bossId/:passWord', registrationController);