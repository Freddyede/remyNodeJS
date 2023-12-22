"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const index = (req, res) => res.render('user/index', { title: "Dashboard", message: "AdminController", user: req.cookies["session_user"] });
exports.index = index;
//# sourceMappingURL=AdminController.js.map