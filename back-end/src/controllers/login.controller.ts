import { Request, Response } from "express";
import { userLoginService } from "../services/login/login.service";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body as { email: string; password: string };
  const [status, token] = await userLoginService(data);

  return res.status(status).json({ token });
};
