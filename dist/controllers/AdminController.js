"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = exports.index = void 0;
const index = (req, res) => res.render('admin/index', { title: "Dashboard", message: "Dashboard", user: req.cookies["session_user"] });
exports.index = index;
const providers = (req, res) => res.render('admin/providers', { title: "BO", message: "Providers", user: req.cookies["session_user"] });
exports.providers = providers;
//# sourceMappingURL=AdminController.js.map