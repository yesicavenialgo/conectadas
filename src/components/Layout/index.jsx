import { NavLink } from "react-router-dom";
import "./style.scss";

const Layout = ({ children, className }) => {
  return (
    <>
      <header className="header">
        <h1> Conectadas </h1>
      </header>
      <nav className="primary-nav">
        <ul className="list-nav">
          <li className="item-nav">
            <NavLink to="/Home" className="link">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="item-nav">
            <NavLink to="/Login" className="link">
              Ingresar
            </NavLink>
          </li>
          <li className="item-nav">
            <NavLink to="/SignUp" className="link">
              Registrarse
            </NavLink>
          </li>
          <li className="item-nav">
            <NavLink to="/Friends" className="link">
              Buscar amigos
            </NavLink>
          </li>
          <li className="item-nav">
            <NavLink to="/Logout" className="link">
              Salir
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={className}>{children}</main>
      <footer className="footer">
        <h3> Footer</h3>
      </footer>
    </>
  );
};

export { Layout };
