import { Contacts } from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";

export async function deleteContactService(contactId: string): Promise<void> {
  const contactRepo = AppDataSource.getRepository(Contacts);

  await contactRepo.softDelete({ id: contactId });

  return;
}
