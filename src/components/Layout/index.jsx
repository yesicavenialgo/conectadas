import { NavLink } from "react-router-dom";
import { Button } from "../Button/button";

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
            <NavLink to="/SearchMovie" className="link">
              Buscar Película
            </NavLink>
          </li>
          <li className="item-nav">
            <NavLink to="/Profile" className="link">
              Perfil
            </NavLink>
          </li>
          <li className="item-nav">
            <Button />
          </li>
        </ul>
      </nav>
      <main className={className}>{children}</main>
      <footer className="footer"></footer>
    </>
  );
};

export { Layout };
