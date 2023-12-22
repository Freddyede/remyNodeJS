"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.port = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("../config");
exports.port = 3000;
exports.app = (0, express_1.default)();
exports.app
    .set('view engine', config_1.Config.View)
    .use((0, cookie_parser_1.default)())
    .use(body_parser_1.default.urlencoded(config_1.Config.BodyParser))
    .use(express_1.default.json());
//# sourceMappingURL=index.js.map