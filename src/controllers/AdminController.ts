

export const index = (req: any, res: any) => res.render('user/index', {title: "Dashboard", message: "AdminController", user: req.cookies["session_user"]});