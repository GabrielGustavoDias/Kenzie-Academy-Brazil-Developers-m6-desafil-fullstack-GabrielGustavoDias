import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/appError";

export const verifyEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contacts);

  const client = await clientRepo.findBy({ email: req.body.email });
  const contact = await contactRepo.findBy({ email: req.body.email });

  if (client.length > 0 || contact.length > 0) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};
