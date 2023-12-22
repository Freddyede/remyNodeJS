"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const login = (_req, res) => res.render('auth/login', { title: "Connexion" });
exports.login = login;
const logout = (req, res) => {
    res.clearCookie("session_user");
    res.redirect('/');
};
exports.logout = logout;
//# sourceMappingURL=AuthController.js.map