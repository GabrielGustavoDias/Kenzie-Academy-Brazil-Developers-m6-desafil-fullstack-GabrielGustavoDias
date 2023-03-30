import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iLogin {
  email: string;
  password: string;
}
interface iAuthContextProps {
  children: React.ReactNode;
}

interface iAuthContext {
  client: true | null;
  setClient: React.Dispatch<React.SetStateAction<true | null>>;
  login: (data: iLogin) => Promise<void>;
  loading: boolean;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const [client, setClient] = useState<true | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setCurrentRoute] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@accessToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/clients `);
          setClient(data);
        } catch (error) {
          toast.error("Please login again");
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadingUser();
  }, []);

  const login = async (data: any) => {
    try {
      const response = await api.post("login", data);
      const token = response.data.token;
      setClient(true);
      localStorage.setItem("@accessToken", token);
      setLoading(true);
      toast.success("Login is sucessfull");
      navigate("home");
    } catch (error) {
      toast.error("Verify the given informations and try again!");
      localStorage.clear();
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, client, setClient, loading, setLoading, setCurrentRoute }}
    >
      {children}
    </AuthContext.Provider>
  );
};
