import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginSerializer } from "../../schemas/loginFormSchema";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import InputPassword from "../InputPassword";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

const LoginForm = () => {
  const { login } = useContext(ClientContext);

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
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="email"
        type="email"
        placeholder="Email"
        register={register("email")}
        error={errors.email}
      />
      <InputPassword
        label="Password"
        type="password"
        placeholder="type your password"
        register={register("password")}
        error={errors.password}
      />

      <button type="submit">Next</button>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </form>
  );
};

export default LoginForm;
