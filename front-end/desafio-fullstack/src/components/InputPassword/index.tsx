import React, { useState } from "react";
import { iInput } from "../Input";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FieldSetPassword } from "../../styles/elements";

const InputPassword = ({ label, placeholder, register, error }: iInput) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <FieldSetPassword>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={isPassword ? "password" : "text"}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      <button type="button" onClick={() => setIsPassword(!isPassword)}>
        {isPassword ? <MdVisibility /> : <MdVisibilityOff />}
      </button>
      {error && <p>{error.message}</p>}
    </FieldSetPassword>
  );
};

export default InputPassword;
