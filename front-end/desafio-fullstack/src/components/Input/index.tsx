import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Message, Ref, UseFormRegister } from "react-hook-form";

export interface iInput {
  id?: string;
  label: string;
  type: string;
  placeholder: string;
  error?: iFieldError;
  register: UseFormRegister<any> | UseFormRegisterReturn<any>;
}

interface iFieldError {
  ref?: Ref;
  type?: string | undefined;
  message?: Message;
}

const Input = ({ label, type, placeholder, register, error }: iInput) => {
  return (
    <fieldset>
      {label && <label htmlFor={register.name}> {label}</label>}
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </fieldset>
  );
};

export default Input;
