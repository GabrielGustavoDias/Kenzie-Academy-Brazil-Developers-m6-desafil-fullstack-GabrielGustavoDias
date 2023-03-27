import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

interface iClientProps {
  children: React.ReactNode;
}

interface iRegister {
  cellphone: string;
  completeName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iLogin {
  email: string;
  password: string;
}

interface iClientContext {
  client: true | null;
  setClient: React.Dispatch<React.SetStateAction<true | null>>;
  login: (data: iLogin) => Promise<void>;
  registerClient: (data: iRegister) => Promise<void>;
  navigate: any;
}

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: iClientProps) => {
  const [client, setClient] = useState<true | null>(null);

  const navigate = useNavigate();

  const login = async (data: any) => {
    try {
      const response = await api.post("login", data);
      const token = response.data.token;
      setClient(true);
      localStorage.setItem("@accessToken", token);
      toast.success("Login is sucessfull");
      navigate("home");
    } catch (error) {
      toast.error("Verify the given informations and try again!");
      localStorage.clear();
    }
  };

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

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
        navigate,
        login,
        registerClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
