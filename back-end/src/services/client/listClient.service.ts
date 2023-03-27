import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  IClient,
  IClientReturn,
} from "../../interfaces/clients/client.interface";
import { clientReturnedSerializer } from "../../serializers/client.serializer";

export const listClientService = async (
  clientId: string
): Promise<IClientReturn> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: clientId });

  const clientSerialized = await clientReturnedSerializer.validate(client, {
    stripUnknown: true,
  });

  return clientSerialized;
};
