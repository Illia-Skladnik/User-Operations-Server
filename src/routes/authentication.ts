import express = require('express');
import { authenticationController } from "../controllers/authentication";

export const authenticationRouter = express.Router();
authenticationRouter.get('/:email/:password', authenticationController);
