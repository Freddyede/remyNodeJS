"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const constants_1 = require("./constants");
const middleware_1 = require("./middleware");
const HomeRoads_1 = __importDefault(require("./routes/HomeRoads"));
const AuthRoads_1 = __importDefault(require("./routes/AuthRoads"));
constants_1.app
    .use(HomeRoads_1.default)
    .use("/admin", middleware_1.sessionChecker, AuthRoads_1.default);
constants_1.app.listen(config_1.Config.app.port, () => {
    return console.log(`Express is listening at http://localhost:${config_1.Config.app.port}`);
});
//# sourceMappingURL=app.js.map