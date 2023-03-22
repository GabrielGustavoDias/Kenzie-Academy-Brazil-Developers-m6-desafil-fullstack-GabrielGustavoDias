import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";

export async function createContactController(
  req: Request,
  res: Response
): Promise<Response> {
  const data = req.body;
  console.log(req.user);
  // const clientId = req.user.id;

  const contact = await createContactService(data);

  return res.status(201).json(contact);
}

export async function listContactController(
  req: Request,
  res: Response
): Promise<Response> {
  const contactId = req.user.id;
  const contact = await listContactService(contactId);

  return res.status(200).json(contact);
}

export async function updateContactController(
  req: Request,
  res: Response
): Promise<Response> {
  const contactId = req.user.id;
  const data = req.body;
  const contact = await updateContactService(contactId, data);

  return res.status(200).json(contact);
}

export async function deleteContactController(
  req: Request,
  res: Response
): Promise<Response> {
  await deleteContactService(req.user.id);

  return res.status(204).send();
}
