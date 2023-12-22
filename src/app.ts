import { Config } from "./config";
import { app } from "./constants";
import { sessionChecker } from "./middleware";

import HomeRoads from "./routes/HomeRoads";
import AdminRoads from "./routes/AuthRoads";

app
    .use(HomeRoads)
    .use(sessionChecker, AdminRoads);

app.listen(Config.port, () => {
  return console.log(`Express is listening at http://localhost:${Config.port}`);
});