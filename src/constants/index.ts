import { Config } from "../config";

export const port = 3000;
export const app = Config.get.express();

app.set('view engine', Config.params.view)
    .use(Config.get.cookieParser())
    .use(Config.get.bodyParser().urlencoded(Config.params.bodyParser))
    .use(Config.get.jsonExpress());
