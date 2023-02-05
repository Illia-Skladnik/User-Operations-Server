"use strict";
exports.__esModule = true;
exports.functionsRouter = void 0;
var express = require("express");
var changeBoss_1 = require("../controllers/changeBoss");
var setAdmin_1 = require("../controllers/setAdmin");
exports.functionsRouter = express.Router();
exports.functionsRouter.get('/changeBoss/:token/:subordinateId/:newBossId', changeBoss_1.changeBossController);
exports.functionsRouter.get('/setAdmin/:token/:newAdminId', setAdmin_1.setAdminController);
