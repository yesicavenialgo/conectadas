import { useState } from "react";
import { NavLink } from "react-router-dom";
import { usersApi } from "../../api";
import "./style.scss";

const inicialData = {
  nam: "",
  lastname: "",
  birth: "",
  city: "",
  country: "",
  email: "",
  pass: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(inicialData);

  const onSubmit = (formData) => {
    usersApi.add(formData);
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
      <main className=" main page-signUp">
        <div>
          <h2>Registrarse</h2>
          <form
            className="form-add-user"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="nam"
                value={formData.nam}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    nam: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido</label>
              <input
                type="text"
                name=""
                value={formData.lastname}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    lastname: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="date"
                name="birth"
                value={formData.birth}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    birth: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Ciudad</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="">País</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    country: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
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
            <div className="form-group">
              <label htmlFor="">Contraseña</label>
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
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export { SignUp };
