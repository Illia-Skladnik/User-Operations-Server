import express = require('express');
import { infoRouter } from './routes/info';
import { registrationRouter } from './routes/registration';
import { authenticationRouter } from './routes/authentication';

const app = express();

app.use('/info', infoRouter);
app.use('/registration', registrationRouter);
app.use('/authentication', authenticationRouter);

app.listen(8080);
