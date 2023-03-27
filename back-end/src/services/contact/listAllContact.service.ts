import { Client } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";

export const listAllContactsService = async (clientId) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const ownerClient = await clientRepo
    .createQueryBuilder("client")
    .innerJoinAndSelect("client.contact", "contacts")
    .select([
      "contacts.id",
      "contacts.completeName",
      "contacts.email",
      "contacts.cellphone",
      "client.id",
      "client.completeName",
    ])
    .where("client.id = :id", { id: clientId })
    .getMany();

  return ownerClient;
};
