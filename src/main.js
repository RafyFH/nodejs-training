import {web} from "./application/web.js";
import {logger} from "./application/logging.js";

web.listen(4050, ()=> {
    logger.info("App Start");
});