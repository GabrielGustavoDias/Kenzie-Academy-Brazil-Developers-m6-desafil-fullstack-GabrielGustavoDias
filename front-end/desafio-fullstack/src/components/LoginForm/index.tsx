import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginSerializer } from "../../schemas/loginFormSchema";
import Input from "../Input";

import { yupResolver } from "@hookform/resolvers/yup";
import InputPassword from "../InputPassword";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Form } from "./styles";

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSerializer) });

  const submit = (formData: any) => {
    login(formData);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="Email"
        register={register("email")}
        error={errors.email}
      />
      <InputPassword
        label="Password"
        type="password"
        placeholder="Password"
        register={register("password")}
        error={errors.password}
      />

      <button type="submit">Next</button>

      <Link to="/register">
        <button className="button">Register</button>
      </Link>
    </Form>
  );
};

export default LoginForm;
