import { Router } from "express";
import {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
  listAllContactsController,
} from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/login/ensureAuth.middleware";
import {
  contactCreateSerializer,
  updateContactSerializer,
} from "../serializers/contact.serializer";
import { verifyEmailAlreadyExists } from "../middlewares/verifyEmailAlreadyExists.middleware";
import { verifyOwnerMiddleware } from "../middlewares/verifyOwner.middleware";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  verifySchemaMiddleware(contactCreateSerializer),
  verifyEmailAlreadyExists,
  createContactController
);
contactRoutes.get("", ensureAuthMiddleware, listContactController);
contactRoutes.get("/all", ensureAuthMiddleware, listAllContactsController);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyOwnerMiddleware,
  verifySchemaMiddleware(updateContactSerializer),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyOwnerMiddleware,
  deleteContactController
);
