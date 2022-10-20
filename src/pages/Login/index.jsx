import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./style.scss";

const inicialData = {
  email: "",
  pass: "",
};

const Login = () => {
  const [formData, setFormData] = useState(inicialData);

  const { login } = useAuth();

  const onSubmit = (formData) => {
    login(formData);
  };

  return (
    <>
      <h1>Conectadas</h1>
      <nav>
        <ul className="list-nav">
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
        </ul>
      </nav>
      <main className="page-login">
        <div className="form-group">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <div className="">
              <label htmlFor="">Escriba su correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="">
              <label htmlFor="">Escriba su contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.pass}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    pass: e.target.value,
                  }))
                }
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
};

export { Login };
