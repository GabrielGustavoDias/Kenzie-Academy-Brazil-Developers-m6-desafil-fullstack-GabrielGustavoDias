import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  IClient,
  IClientReturn,
} from "../../interfaces/clients/client.interface";
import { clientReturnedSerializer } from "../../serializers/client.serializer";

export const createClientService = async (
  data: IClient
): Promise<IClientReturn> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = clientRepo.create(data);

  await clientRepo.save(client);

  const clientSerialized = await clientReturnedSerializer.validate(client, {
    stripUnknown: true,
  });

  return clientSerialized;
};
