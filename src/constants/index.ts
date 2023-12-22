import { Config } from "../config";

export const app = Config.get.express();

app.set(Config.get.views(), Config.params.view)
    .use(Config.get.cookieParser())
    .use(Config.get.bodyParser().urlencoded(Config.params.bodyParser))
    .use(Config.get.jsonExpress());
