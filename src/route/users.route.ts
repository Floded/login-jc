import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/users.controller";

export const userRoute = Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUserById);
userRoute.post("/", createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);
