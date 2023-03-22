import * as yup from "yup";
import { SchemaOf } from "yup";
import { IClientReturn } from "../interfaces/clients/client.interface";

export const clientCreateSerializer = yup.object().shape({
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

export const clientReturnedSerializer: SchemaOf<IClientReturn> = yup
  .object()
  .shape({
    id: yup.string(),
    completeName: yup.string().required(),
    cellphone: yup.string(),
    email: yup.string().email(),
    registerDate: yup.date(),
    deletedAt: yup.date(),
    updateAt: yup.date(),
  });
