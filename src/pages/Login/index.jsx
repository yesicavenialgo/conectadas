import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { withAuth } from "../../hoc/whitAuth";
import { useAuth } from "../../hooks/useAuth";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";

const defaultValues = {
  email: "",
  pass: "",
};

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { login } = useAuth();

  const logged = (data) => {
    login(data);
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
          <form className="form-login" onSubmit={handleSubmit(logged)}>
            <div className="">
              <label htmlFor="">Escriba su correo electrónico</label>
              <input
                type="email"
                placeholder="Escriba un correo electrónico"
                {...register("email")}
              />
              {formState.errors.email?.message}
            </div>
            <div className="">
              <label htmlFor="">Escriba su contraseña</label>
              <input
                type="password"
                placeholder="Escriba su contraseña"
                {...register("pass")}
              />
              {formState.errors.pass?.message}
            </div>
            <button
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export const Login = withAuth(LoginPage);
