"use strict";
exports.__esModule = true;
exports.authenticationRouter = void 0;
var express = require("express");
var authentication_1 = require("../controllers/authentication");
exports.authenticationRouter = express.Router();
exports.authenticationRouter.get('/:email/:password', authentication_1.authenticationController);
