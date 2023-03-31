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
    const token = localStorage.getItem("@accessToken");
    if (token) {
      try {
        await api.post("contacts", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Contact registred!");
      } catch (error) {
        toast.error("Entered data already registered");
      }
    } else {
      toast.error("Connection lost please login again");
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
