import React, { useState } from "react";
import { iInput } from "../Input";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const InputPassword = ({ label, placeholder, register, error }: iInput) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <fieldset>
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
    </fieldset>
  );
};

export default InputPassword;
