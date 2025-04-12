"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const forbidden_error_1 = __importDefault(require("../../domain/errors/forbidden-error"));
const isAdmin = (req, res, next) => {
    var _a, _b, _c;
    console.log("Full auth object:", req.auth);
    if (((_c = (_b = (_a = req === null || req === void 0 ? void 0 : req.auth) === null || _a === void 0 ? void 0 : _a.sessionClaims) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.role) !== "admin") {
        throw new forbidden_error_1.default("Forbidden");
    }
    next();
};
exports.isAdmin = isAdmin;
