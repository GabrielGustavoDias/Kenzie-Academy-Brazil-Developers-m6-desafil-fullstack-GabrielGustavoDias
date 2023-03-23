import { Client } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";

export async function deleteClientService(clientId: string): Promise<void> {
  const clientRepo = AppDataSource.getRepository(Client);

  await clientRepo.softDelete({ id: clientId });

  return;
}
