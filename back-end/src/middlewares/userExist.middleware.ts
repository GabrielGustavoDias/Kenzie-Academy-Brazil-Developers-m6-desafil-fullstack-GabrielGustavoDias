import { NextFunction, Request, Response } from "express";
import { object } from "yup";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/appError";

export const userExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contacts);

  let user;

  const client = await clientRepo.findOneBy({
    email: req.body.email,
  });

  if (client) {
    user = client;
  } else {
    const contact = await contactRepo.findOneBy({
      email: req.body.email,
    });

    if (contact) {
      user = contact;
    }
  }

  if (!user) {
    throw new AppError("User or password invalid!", 403);
  }

  req.user = user;

  return next();
};
