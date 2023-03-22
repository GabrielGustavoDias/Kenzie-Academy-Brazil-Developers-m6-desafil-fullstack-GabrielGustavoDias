import { Client } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";
import {
  IClient,
  IClientReturn,
} from "../../interfaces/clients/client.interface";
import { clientReturnedSerializer } from "../../serializers/client.serializer";

export async function updateClientService(
  clientId: string,
  data: IClient
): Promise<IClientReturn> {
  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOneBy({
    id: clientId,
  });

  const updateClient = clientRepo.create({
    ...findClient,
    ...data,
  });

  await clientRepo.save(updateClient);

  const clientSerialized = await clientReturnedSerializer.validate(
    updateClient,
    {
      stripUnknown: true,
    }
  );

  return clientSerialized;
}
