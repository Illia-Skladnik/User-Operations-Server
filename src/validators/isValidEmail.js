"use strict";
exports.__esModule = true;
exports.isValidEmail = void 0;
exports.isValidEmail = (function (email) {
    return email.length > 4 && email.includes('@');
});
