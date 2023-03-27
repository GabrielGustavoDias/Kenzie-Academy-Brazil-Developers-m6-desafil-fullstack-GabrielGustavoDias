import { Request, Response } from "express";
import { createClientService } from "../services/client/createClient.service";
import { listClientService } from "../services/client/listClient.service";
import { updateClientService } from "../services/client/updateClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";

export async function createClientController(
  req: Request,
  res: Response
): Promise<Response> {
  const data = req.body;

  const client = await createClientService(data);

  return res.status(201).json(client);
}

export async function listClientController(
  req: Request,
  res: Response
): Promise<Response> {
  const clientId = req.user.id;
  const client = await listClientService(clientId);

  return res.status(200).json(client);
}

export async function updateClientController(
  req: Request,
  res: Response
): Promise<Response> {
  const clientId = req.user.id;
  const data = req.body;
  const client = await updateClientService(clientId, data);

  return res.status(200).json(client);
}

export async function deleteClientController(
  req: Request,
  res: Response
): Promise<Response> {
  await deleteClientService(req.user.id);

  return res.status(204).send();
}
