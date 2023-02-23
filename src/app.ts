import * as express from 'express';
import { infoRouter } from './routes/info';
import { registrationRouter } from './routes/registration';
import { authenticationRouter } from './routes/authentication';
import { functionsRouter } from './routes/functions';
import { errorRouter } from './routes/error';

const app = express();

app.use('/registration', registrationRouter);
app.use('/authentication', authenticationRouter);
app.use('/info', infoRouter);
app.use('/functions', functionsRouter);
app.use('*', errorRouter);

app.listen(8080);
