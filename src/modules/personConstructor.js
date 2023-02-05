"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.User = void 0;
// import { getAllUsers } from '../services/getAllUsers';
var addUser_1 = require("../services/addUser");
var Person = /** @class */ (function () {
    function Person(id, name, email, password, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name, email, bossId, password, token) {
        var _this = _super.call(this, id, name, email, password, token) || this;
        _this.role = 'user';
        _this.bossId = bossId;
        return _this;
    }
    User.prototype.registerUser = function () {
        (0, addUser_1.addUser)(this);
    };
    return User;
}(Person));
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name, email, password, token) {
        var _this = _super.call(this, id, name, email, password, token) || this;
        _this.role = 'admin';
        return _this;
    }
    return Admin;
}(Person));
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(id, name, email, password, subordinatesId, token) {
        var _this = _super.call(this, id, name, email, password, token) || this;
        _this.role = 'boss';
        _this.subordinatesId = subordinatesId;
        return _this;
    }
    return Boss;
}(Person));
