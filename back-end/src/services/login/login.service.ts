import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Client } from "../../entities/clients.entity";
import { Contacts } from "../../entities/contacts.entity";

export const userLoginService = async ({
  email,
  password,
}): Promise<[number, string]> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contacts);

  const client = await clientRepo.findOneBy({
    email: email,
  });

  const contact = await contactRepo.findOneBy({
    email: email,
  });

  if (client) {
    const token = jwt.sign(
      {
        id: client.id,
        email: client.email,
      },
      String(process.env.SECRET_KEY),
      {
        subject: client.id,
        expiresIn: "24h",
      }
    );
    return [200, token];
  } else {
    const token = jwt.sign(
      {
        id: contact.id,
        email: contact.email,
      },
      String(process.env.SECRET_KEY),
      {
        subject: contact.id,
        expiresIn: "24h",
      }
    );
    return [200, token];
  }
};
