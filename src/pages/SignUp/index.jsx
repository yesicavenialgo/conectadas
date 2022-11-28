import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { usersApi } from "../../api";
import { yupResolver } from "@hookform/resolvers/yup";

import "./style.scss";
import { validationSchema } from "../Login/validationSchema";

const defaultValues = {
  nam: "",
  lastname: "",
  birth: "",
  city: "",
  country: "",
  email: "",
  pass: "",
};

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const save = (formData) => {
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
          <form className="form-add-user" onSubmit={handleSubmit(save)}>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" {...register("nam")} />
              {formState.errors.nam?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido</label>
              <input type="text" {...register("lastname")} />
              {formState.errors.lastname?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha de nacimiento</label>
              <input type="date" {...register("birth")} />
              {formState.errors.birth?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">Ciudad</label>
              <input type="text" {...register("city")} />
              {formState.errors.city?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">País</label>
              <input type="text" {...register("country")} />
              {formState.errors.country?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" {...register("email")} />
              {formState.errors.email?.message}
            </div>
            <div className="form-group">
              <label htmlFor="">Contraseña</label>
              <input type="password" {...register("pass")} />
              {formState.errors.pass?.message}
            </div>
            <div>
              <button
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export { SignUp };
