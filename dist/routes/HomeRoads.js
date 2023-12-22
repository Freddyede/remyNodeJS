"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware");
const AuthController_1 = require("../controllers/AuthController");
const HomeController_1 = require("../controllers/HomeController");
const HomeRoads = express_1.default.Router();
HomeRoads.get('/', HomeController_1.index)
    .get('/login', AuthController_1.login)
    .post('/login', middleware_1.setCookieMiddleWare)
    .get('/logout', AuthController_1.logout);
exports.default = HomeRoads;
//# sourceMappingURL=HomeRoads.js.map