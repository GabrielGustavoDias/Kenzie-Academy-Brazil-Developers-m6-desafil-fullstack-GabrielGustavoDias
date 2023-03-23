import { Contacts } from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";
import {
  IContact,
  IContactReturn,
} from "../../interfaces/contacts/contact.interface";
import { contactReturnedSerializer } from "../../serializers/contact.serializer";

export async function updateContactService(
  contactId: string,
  data: IContact
): Promise<IContactReturn> {
  const contactRepo = AppDataSource.getRepository(Contacts);

  const findContact = await contactRepo.findOneBy({
    id: contactId,
  });

  const updateContact = contactRepo.create({
    ...findContact,
    ...data,
  });

  await contactRepo.save(updateContact);

  const contactSerialized = await contactReturnedSerializer.validate(
    updateContact,
    {
      stripUnknown: true,
    }
  );

  return contactSerialized;
}
