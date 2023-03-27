import * as yup from "yup";

export const loginSerializer = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email required"),
  password: yup.string().required("Password required"),
});
