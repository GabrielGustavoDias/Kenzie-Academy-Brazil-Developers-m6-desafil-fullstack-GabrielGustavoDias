import * as yup from "yup";

export const registerFormSerializer = yup.object().shape({
  cellphone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Enter a phone number in this format (99) 99999-9999"
    )
    .required("Cellphone is required"),
  completeName: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(8, "The password must have at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match ")
    .required("Confirm password is required"),
});
