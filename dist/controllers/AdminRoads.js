"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const index = (req, res) => res.render('admin/index', { title: "Dashboard", user: req.cookies["session_user"] });
exports.index = index;
//# sourceMappingURL=AdminRoads.js.map