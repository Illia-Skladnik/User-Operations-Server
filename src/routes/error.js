"use strict";
exports.__esModule = true;
exports.errorRouter = void 0;
var express = require("express");
var error_1 = require("../controllers/error");
exports.errorRouter = express.Router();
exports.errorRouter.get('/', error_1.errorController);
