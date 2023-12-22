export const login = (_req: any, res: any) => res.render('auth/login', {title: "Connexion"});

export const logout = (req: any, res: any) => {
    res.clearCookie("session_user"); res.redirect('/');
};