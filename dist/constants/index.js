"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const config_1 = require("../config");
exports.app = config_1.Config.get.express();
exports.app.set(config_1.Config.get.views(), config_1.Config.params.view)
    .use(config_1.Config.get.cookieParser())
    .use(config_1.Config.get.bodyParser().urlencoded(config_1.Config.params.bodyParser))
    .use(config_1.Config.get.jsonExpress());
//# sourceMappingURL=index.js.map