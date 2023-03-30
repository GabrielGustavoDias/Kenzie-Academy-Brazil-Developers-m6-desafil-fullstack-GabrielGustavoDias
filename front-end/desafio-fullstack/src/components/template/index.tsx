import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../Header";
interface iProps {
  children: ReactNode;
}
const DefaultTemplate = ({ children }: iProps) => {
  const { loading } = useContext(AuthContext);
  console.log(loading);
  return (
    <>
      {loading ? <Header /> : <></>}
      <main>{children}</main>
    </>
  );
};

export default DefaultTemplate;
