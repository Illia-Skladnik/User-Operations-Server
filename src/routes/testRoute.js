"use strict";
exports.__esModule = true;
exports.testRouter = void 0;
var express = require("express");
var test_1 = require("../controllers/test");
exports.testRouter = express.Router();
exports.testRouter.get('/', test_1.testController);
