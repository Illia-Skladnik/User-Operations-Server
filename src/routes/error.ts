import express = require('express');
import { errorController } from "../controllers/error";

export const errorRouter = express.Router();
errorRouter.get('/', errorController);

