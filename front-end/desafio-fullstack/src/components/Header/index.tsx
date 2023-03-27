import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../../context/ClientContext";

const Header = () => {
  const { setClient } = useContext(ClientContext);
  const logout = () => {
    setClient(null);
  };

  return (
    <header>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/home">Contatos</Link>
          </li>

          <li>
            <Link to="/contacts">Novo contato</Link>
          </li>

          <li>
            <Link to="/" onClick={logout}>
              Sair
            </Link>
          </li>
        </ul>
        <button>Dark mode</button>
      </nav>
    </header>
  );
};

export default Header;
