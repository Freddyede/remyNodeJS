"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.port = void 0;
const config_1 = require("../config");
exports.port = 3000;
exports.app = config_1.Config.get.express();
exports.app.set('view engine', config_1.Config.params.view)
    .use(config_1.Config.get.cookieParser())
    .use(config_1.Config.get.bodyParser().urlencoded(config_1.Config.params.bodyParser))
    .use(config_1.Config.get.jsonExpress());
//# sourceMappingURL=index.js.map