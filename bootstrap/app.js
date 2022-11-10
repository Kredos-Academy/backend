import cors from "cors";
import express from "express";
import helmet from "helmet";
import methodOverride from "method-override";
import errorHandler from "../app/errorHandler";
import { AppConfig,DBConfig } from "./../config";
import routes from "../routes/routes";

class App {
    constructor() {
        this.app = express();
        this.appDebug = AppConfig.debug === "true";

        this.setup();
        this.database();
        this.authentication();
        this.routers();
    }

    setup() {
        this.app.use(helmet());
        // this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors());
        this.app.use(methodOverride("_method"));
    }

    database() {
        const database = DBConfig.connectDB();
    }

    routers() {
        routes(this.app);

        this.app.use(errorHandler);
    }

    authentication() {
    }

}

export default new App().app;