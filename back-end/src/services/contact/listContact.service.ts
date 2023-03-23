import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactReturn } from "../../interfaces/contacts/contact.interface";
import { contactReturnedSerializer } from "../../serializers/contact.serializer";

export const listContactService = async (
  contactId: string
): Promise<IContactReturn> => {
  const contactRepo = AppDataSource.getRepository(Contacts);

  const contact = await contactRepo.findOneBy({ id: contactId });

  const contactSerialized = await contactReturnedSerializer.validate(contact, {
    stripUnknown: true,
  });

  return contactSerialized;
};
