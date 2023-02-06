"use strict";
exports.__esModule = true;
var express = require("express");
var info_1 = require("./routes/info");
var registration_1 = require("./routes/registration");
var authentication_1 = require("./routes/authentication");
var functions_1 = require("./routes/functions");
var error_1 = require("./routes/error");
var app = express();
app.use('/registration', registration_1.registrationRouter);
app.use('/authentication', authentication_1.authenticationRouter);
app.use('/info', info_1.infoRouter);
app.use('/functions', functions_1.functionsRouter);
app.use('*', error_1.errorRouter);
app.listen(8080);
