import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../../context/ClientContext";

const Header = () => {
  const { logout } = useContext(ClientContext);

  return (
    <header>
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
    </header>
  );
};

export default Header;
