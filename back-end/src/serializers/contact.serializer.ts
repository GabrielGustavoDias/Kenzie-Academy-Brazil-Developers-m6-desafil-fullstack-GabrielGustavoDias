import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactReturn } from "../interfaces/contacts/contact.interface";

export const contactCreateSerializer = yup.object().shape({
  cellphone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Invalid cell phone"
    )
    .required(),
  completeName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "The password must have at least 8 characters")
    .required(),
  registerDate: yup.date().notRequired(),
});

export const contactReturnedSerializer: SchemaOf<IContactReturn> = yup
  .object()
  .shape({
    id: yup.string(),
    completeName: yup.string(),
    cellphone: yup.string(),
    email: yup.string().email(),
    registerDate: yup.date(),
    client: yup.object().shape({
      id: yup.string(),
      email: yup.string().email(),
    }),
    updateAt: yup.date(),
  });

export const updateContactSerializer = yup.object().shape({
  completeName: yup.string().notRequired(),
  cellphone: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup
    .string()
    .min(8, "The password must have at least 8 characters")
    .notRequired(),
});
