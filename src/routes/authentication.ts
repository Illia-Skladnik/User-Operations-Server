import * as express from 'express';
import { authenticationController } from "../controllers/authentication";

export const authenticationRouter = express.Router();
authenticationRouter.get('/', authenticationController);
