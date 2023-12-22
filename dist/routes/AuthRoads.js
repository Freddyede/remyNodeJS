"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminRoads_1 = require("../controllers/AdminRoads");
const AdminRoads = express_1.default.Router();
AdminRoads.get('/admin', AdminRoads_1.index);
exports.default = AdminRoads;
//# sourceMappingURL=AuthRoads.js.map