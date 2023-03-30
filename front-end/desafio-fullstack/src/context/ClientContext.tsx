import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";

interface iClientProps {
  children: React.ReactNode;
}

export interface iContact {
  id: string;
  completeName: string;
  email: string;
  cellphone: string;
}

export interface iContacts {
  id: string;
  completeName: string;
  contact: iContact[];
}

interface iRegister {
  cellphone: string;
  completeName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iClientContext {
  contactsList: iContacts[] | null;
  setContactsList: React.Dispatch<React.SetStateAction<iContacts[] | null>>;
  registerClient: (data: iRegister) => Promise<void>;
  navigate: any;
  logout: () => void;
}

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: iClientProps) => {
  const { setClient, login } = useContext(AuthContext);
  const [contactsList, setContactsList] = useState<iContacts[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@accessToken");
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get("contacts/all", {
            headers: { Authorization: `Bearear ${token}` },
          });
          const list = response.data;
          setContactsList(list);
        } catch (error) {
          localStorage.removeItem("@accessToken");
          navigate("/");
          toast.error("Connection lost please login again");
        }
      };

      autoLogin();
    }
  }, [contactsList, navigate]);

  const registerClient = async (data: any) => {
    try {
      await api.post("client", data);
      toast.success("Client registred!");
      try {
        login({ email: data.email, password: data.password });
      } catch {}
    } catch (error) {
      toast.error("Entered data already registered");
    }
  };

  const logout = () => {
    setClient(null);
    localStorage.removeItem("@accessToken");
    navigate("/");
  };

  return (
    <ClientContext.Provider
      value={{
        navigate,
        contactsList,
        setContactsList,
        registerClient,
        logout,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
