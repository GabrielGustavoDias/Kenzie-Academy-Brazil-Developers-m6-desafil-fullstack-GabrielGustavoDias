import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../Header";
import { Main } from "./styles";
interface iProps {
  children: ReactNode;
}
const DefaultTemplate = ({ children }: iProps) => {
  const { client } = useContext(AuthContext);
  return (
    <>
      {client ? <Header /> : <></>}
      <Main>{children}</Main>
    </>
  );
};

export default DefaultTemplate;
