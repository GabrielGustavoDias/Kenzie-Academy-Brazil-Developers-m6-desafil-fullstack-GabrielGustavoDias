import React, { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

interface iContactProps {
  children: React.ReactNode;
}

interface iRegister {
  cellphone: string;
  completeName: string;
  email: string;
  password: string;
}

interface iContactContext {
  registerContact: (data: iRegister) => Promise<void>;
}

export const ContactContext = createContext({} as iContactContext);

export const ContactProvider = ({ children }: iContactProps) => {
  const registerContact = async (data: any) => {
    try {
      const token = localStorage.getitem("@accessToken");
      await api.post("contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contact registred!");
    } catch (error) {
      toast.error("Entered data already registered");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        registerContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
