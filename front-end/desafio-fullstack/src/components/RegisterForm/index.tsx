import { useForm } from "react-hook-form";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSerializer } from "../../schemas/registerFormSchema";
import InputPassword from "../InputPassword";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { Form } from "../LoginForm/styles";

const RegisterForm = () => {
  const { registerClient } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerFormSerializer) });

  const submit = (formData: any) => {
    registerClient(formData);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        label="Name"
        type="text"
        placeholder="Type your name"
        register={register("completeName")}
        error={errors.completeName}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Type your email"
        register={register("email")}
        error={errors.email}
      />

      <InputPassword
        label="Password"
        type="password"
        placeholder="Create a password"
        register={register("password")}
        error={errors.password}
      />

      <InputPassword
        label="Confirm your password"
        type="password"
        placeholder="Confirm password"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Input
        label="Cellphone"
        type="text"
        placeholder="Type your cellphone number"
        register={register("cellphone")}
        error={errors.cellphone}
      />

      <button className=".button" type="submit">
        Next
      </button>
    </Form>
  );
};

export default RegisterForm;
