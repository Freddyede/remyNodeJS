"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const config_1 = require("../config");
exports.app = config_1.Config.app.get.express();
exports.app.set(config_1.Config.app.get.views(), config_1.Config.app.params.view)
    .use(config_1.Config.app.get.cookieParser())
    .use(config_1.Config.app.get.bodyParser().urlencoded(config_1.Config.app.params.bodyParser))
    .use(config_1.Config.app.get.jsonExpress());
//# sourceMappingURL=index.js.map