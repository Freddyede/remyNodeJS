"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.default = express_1.default.Router()
    .get('/admin', (req, res) => {
    res.render('user/index', { title: "Dashboard", user: req.cookies["session_user"] });
});
//# sourceMappingURL=index.js.map