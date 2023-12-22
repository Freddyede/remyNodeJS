

export const index = (req: any, res: any) => res.render('admin/index', {title: "Dashboard", message: "Dashboard", user: req.cookies["session_user"]});
export const providers = (req: any, res: any) => res.render('admin/providers', {title: "BO", message: "Providers", user: req.cookies["session_user"]});