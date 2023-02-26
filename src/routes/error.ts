import * as express from 'express';
import { errorController } from "../controllers/error";

export const errorRouter = express.Router();
errorRouter.get('/', errorController);
errorRouter.post('/', errorController);
errorRouter.put('/', errorController);
errorRouter.patch('/', errorController);
errorRouter.delete('/', errorController);

