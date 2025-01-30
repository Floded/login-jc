"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controller/users.controller");
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get("/", users_controller_1.getAllUsers);
exports.userRoute.get("/:id", users_controller_1.getUserById);
exports.userRoute.post("/", users_controller_1.createUser);
exports.userRoute.put("/:id", users_controller_1.updateUser);
exports.userRoute.delete("/:id", users_controller_1.deleteUser);
//# sourceMappingURL=users.route.js.map