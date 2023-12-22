"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.Config = {
    app: {
        get: {
            bodyParser: () => body_parser_1.default,
            cookieParser: () => (0, cookie_parser_1.default)(),
            express: () => (0, express_1.default)(),
            jsonExpress: () => express_1.default.json(),
            views: () => 'view engine'
        },
        params: {
            bodyParser: {
                extended: true
            },
            view: 'pug'
        },
        port: 3000
    },
    databases: {}
};
//# sourceMappingURL=index.js.map