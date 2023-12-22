"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.port = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
exports.port = 3000;
exports.app = (0, express_1.default)();
exports.app
    .set('view engine', 'pug')
    .use((0, cookie_parser_1.default)())
    .use(body_parser_1.default.urlencoded({
    extended: true
})).use(express_1.default.json());
//# sourceMappingURL=index.js.map