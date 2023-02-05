"use strict";
exports.__esModule = true;
exports.registrationRouter = void 0;
var express = require("express");
var registration_1 = require("../controllers/registration");
exports.registrationRouter = express.Router();
exports.registrationRouter.post('/:name/:email/:bossId/:password', registration_1.registrationController);
