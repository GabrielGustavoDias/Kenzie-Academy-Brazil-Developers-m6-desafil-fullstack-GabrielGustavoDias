import React from "react";
import RegisterContactForm from "../../components/RegisterContactForm";
import { Box } from "../LoginPage/styled";

const RegisterContactPage = () => {
  return (
    <Box>
      <h1>Register your contact</h1>
      <RegisterContactForm />
    </Box>
  );
};

export default RegisterContactPage;
