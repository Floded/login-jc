import cors from "cors";
import express, { Application } from "express";
import { envs } from "../config/plugins/env.plugin";
import { userRoute } from "../route/users.route";

export class Server {
  private app: Application;
  private port: number | string;
  private apiPaths = {
    user: "/api/users",
  };
  constructor() {
    this.app = express();
    this.port = envs.PORT;
    //Todo BD
    this.middlewares();
    this.routes();
  }

  // Todo Base de datos

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.user, userRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server runing on port ${this.port}`);
    });
  }
}
