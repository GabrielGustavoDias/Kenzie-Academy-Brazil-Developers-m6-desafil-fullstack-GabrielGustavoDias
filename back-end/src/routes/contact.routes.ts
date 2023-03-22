import { Router } from "express";
import {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/login/ensureAuth.middleware";
import { contactCreateSerializer } from "../serializers/contact.serializer";
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
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyOwnerMiddleware,
  updateContactController
);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyOwnerMiddleware,
  deleteContactController
);

// CRIAR SERIALIZER DE UPDATE
