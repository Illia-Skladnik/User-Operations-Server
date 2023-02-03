import express = require('express');
// import express from 'express';
import { testRouter } from './routes/testRoute';
import { registrationRouter } from './routes/registration';

const app = express();

app.use(`/test`, testRouter);
app.use(`/registration`, registrationRouter);

app.listen(8080);
