"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionChecker = exports.setCookieMiddleWare = void 0;
const setCookieMiddleWare = (req, res, _next) => {
    res.cookie('session_user', req.body);
    req.method = "GET";
    res.redirect('/admin');
};
exports.setCookieMiddleWare = setCookieMiddleWare;
const sessionChecker = (req, res, next) => ('session_user' in req.cookies) ? next() : res.redirect('/login');
exports.sessionChecker = sessionChecker;
//# sourceMappingURL=index.js.map