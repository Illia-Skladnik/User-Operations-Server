import express = require('express');

import { testController } from "../controllers/test";

export const testRouter = express.Router();
testRouter.get('/', testController);