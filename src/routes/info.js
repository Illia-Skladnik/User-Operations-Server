"use strict";
exports.__esModule = true;
exports.infoRouter = void 0;
var express = require("express");
var info_1 = require("../controllers/info");
exports.infoRouter = express.Router();
exports.infoRouter.get('/:userId', info_1.infoController);
