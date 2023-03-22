import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contacts } from "../../entities/contacts.entity";
import {
  IContact,
  IContactReturn,
} from "../../interfaces/contacts/contact.interface";
import { contactReturnedSerializer } from "../../serializers/contact.serializer";

export const createContactService = async (
  data: IContact
): Promise<IContactReturn> => {
  const contactRepo = AppDataSource.getRepository(Contacts);

  const clientRepo = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOneBy({
    email: "gabriel@gmail.com",
  });

  const contact = contactRepo.create({ ...data, client: findClient });

  await contactRepo.save(contact);

  const contactSerialized = await contactReturnedSerializer.validate(contact, {
    stripUnknown: true,
  });

  return contactSerialized;
};
