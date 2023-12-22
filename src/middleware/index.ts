export const setCookieMiddleWare = (req: any, res: any, _next: any) => {
    res.cookie('session_user', req.body);
    req.method = "GET";
    res.redirect('/admin');
};

export const sessionChecker = (req: any, res: any, next: any) => ('session_user' in req.cookies) ? next() : res.redirect('/login');
