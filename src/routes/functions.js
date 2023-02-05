"use strict";
exports.__esModule = true;
exports.functionsRouter = void 0;
var express = require("express");
var changeBoss_1 = require("../controllers/changeBoss");
exports.functionsRouter = express.Router();
exports.functionsRouter.get('/changeBoss/:token/:subordinateId/:newBossId', changeBoss_1.changeBossController);
