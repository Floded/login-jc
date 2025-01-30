"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const env_plugin_1 = require("../config/plugins/env.plugin");
const users_route_1 = require("../route/users.route");
class Server {
    constructor() {
        this.apiPaths = {
            user: "/api/users",
        };
        this.app = (0, express_1.default)();
        this.port = env_plugin_1.envs.PORT;
        //Todo BD
        this.middlewares();
        this.routes();
    }
    // Todo Base de datos
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.user, users_route_1.userRoute);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map