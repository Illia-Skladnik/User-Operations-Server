import * as express from 'express';
import { registrationController } from "../controllers/registration";

export const registrationRouter = express.Router();
registrationRouter.post('/', registrationController);
