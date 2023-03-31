import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../../context/ClientContext";
import { HeaderStyled } from "./styles";

const Header = () => {
  const { logout } = useContext(ClientContext);

  return (
    <HeaderStyled>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/home">Contacts</Link>
          </li>

          <li>
            <Link to="/contacts">New contact</Link>
          </li>

          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
