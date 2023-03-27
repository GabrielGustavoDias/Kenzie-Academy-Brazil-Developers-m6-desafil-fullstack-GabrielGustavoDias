import { ReactNode, useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import Header from "../Header";
interface iProps {
  children: ReactNode;
}
const DefaultTemplate = ({ children }: iProps) => {
  const { client } = useContext(ClientContext);
  return (
    <>
      {client ? <Header /> : <></>}
      <main>{children}</main>
    </>
  );
};

export default DefaultTemplate;
