import { Config } from "../config";

export const app = Config.app.get.express();

app.set(Config.app.get.views(), Config.app.params.view)
    .use(Config.app.get.cookieParser())
    .use(Config.app.get.bodyParser().urlencoded(Config.app.params.bodyParser))
    .use(Config.app.get.jsonExpress());
