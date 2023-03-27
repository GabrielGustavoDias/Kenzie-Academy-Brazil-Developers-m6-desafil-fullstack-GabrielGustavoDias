import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { userExist } from "../middlewares/userExist.middleware";
import { userPasswordIsValid } from "../middlewares/login/userPasswordIsValid.middleware";

export const loginRoutes = Router();

loginRoutes.post("", userExist, userPasswordIsValid, loginController);
