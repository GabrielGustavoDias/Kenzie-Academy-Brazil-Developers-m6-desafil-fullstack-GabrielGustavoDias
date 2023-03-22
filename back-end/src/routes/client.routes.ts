import { Router } from "express";
import {
  createClientController,
  listClientController,
  updateClientController,
  deleteClientController,
} from "../controllers/clients.controller";

export const clientRoutes = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", listClientController);
clientRoutes.patch("/:id", updateClientController);
clientRoutes.patch("/:id", deleteClientController);
