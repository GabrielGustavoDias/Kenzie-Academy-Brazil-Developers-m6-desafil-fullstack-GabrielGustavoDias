import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { userExist } from "../middlewares/userExist.middleware";
import { userPasswordIsValid } from "../middlewares/login/userPasswordIsValid.middleware";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { loginSerializer } from "../serializers/login.serializer";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  verifySchemaMiddleware(loginSerializer),
  userExist,
  userPasswordIsValid,
  loginController
);
