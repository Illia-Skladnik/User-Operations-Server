"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.changeBossController = void 0;
var changeBoss_1 = require("../services/changeBoss");
var isValidToken_1 = require("../validators/isValidToken");
var isSubordinate_1 = require("../validators/isSubordinate");
var isValidBossID_1 = require("../validators/isValidBossID");
var isBoss_1 = require("../validators/isBoss");
var changeBossController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, subordinateId, newBossId, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, token = _a.token, subordinateId = _a.subordinateId, newBossId = _a.newBossId;
                return [4 /*yield*/, (0, isValidToken_1.isValidToken)(token)];
            case 1:
                if (!(_b.sent())) {
                    res.sendStatus(498);
                    throw new Error('Invalid token');
                }
                return [4 /*yield*/, (0, isBoss_1.isBoss)(token)];
            case 2:
                if (_b.sent()) {
                    res.sendStatus(403);
                    throw new Error('You\'re not a boss :( At least for now.');
                }
                return [4 /*yield*/, (0, isValidBossID_1.isValidBossID)(+newBossId)];
            case 3:
                if (!(_b.sent())) {
                    res.sendStatus(404);
                    throw new Error('Given user is not a boss');
                }
                return [4 /*yield*/, (0, isSubordinate_1.isSubordinate)(token, +subordinateId)];
            case 4:
                if (!(_b.sent())) {
                    res.sendStatus(404);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, changeBoss_1.changeBossService)(token, +subordinateId, +newBossId)];
            case 5:
                response = _b.sent();
                if (!response) {
                    res.sendStatus(404);
                    return [2 /*return*/];
                }
                res.json(response);
                return [2 /*return*/];
        }
    });
}); };
exports.changeBossController = changeBossController;
