import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { compare } from "bcryptjs";
import { Client } from "../../entities/clients.entity";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

export const userPasswordIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const clientRepository = AppDataSource.getRepository(Client);

  const contact = await contactsRepository.findOneBy({
    email: req.body.email,
  });

  const client = await clientRepository.findOneBy({
    email: req.body.email,
  });

  if (!contact && !client) {
    throw new AppError("User or password invalid!", 403);
  }

  let passwordMatch = false;

  if (contact) {
    passwordMatch = await compare(req.body.password, contact.password);
    if (passwordMatch) {
      req.user = contact;
      return next();
    }
  }

  if (client) {
    passwordMatch = await compare(req.body.password, client.password);
    if (passwordMatch) {
      req.user = client;
      return next();
    }
  }

  throw new AppError("User or password invalid!", 403);
};
