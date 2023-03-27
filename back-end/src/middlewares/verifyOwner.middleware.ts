import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/appError";

export const verifyOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user.id;
  const id = req.params.id;

  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contacts);

  const client = await clientRepo.findOneBy({
    id: id,
  });

  const contact = await contactRepo.findOneBy({
    id: id,
  });

  if (!client && !contact) {
    throw new AppError("User not found", 404);
  }

  if (client && userId !== client.id) {
    throw new AppError("Insufficient permission", 403);
  }

  if (contact && userId !== contact.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
