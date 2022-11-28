import { useContext, useEffect, useState } from "react";
import { usersApi } from "../../api";
import { AuthContext } from "../../contexts/auth";
import { mapToArray } from "../../helpers";
import { apiDB } from "../../utils/axios";

const useAuth = () => {
  const { me, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    loginWithToken();
  }, []);

  const userToken = async (id) => {
    const newToken = Math.random().toString(36).substr(2);
    const rsp = await usersApi.patch(id, { sessionToken: newToken });
    return rsp ? newToken : null;
  };
  const login = async ({ email, pass }) => {
    const users = await usersApi.getAll();

    const logged = users.find(
      (user) => user.email === email && user.pass === pass
    );

    if (logged) {
      const token = await userToken(logged.id);
      if (token) {
        localStorage.setItem("user-token", token);
        setCurrentUser(logged);
      }
    }
  };
  const loginWithToken = async () => {
    const users = await usersApi.getAll();

    const storedToken = localStorage.getItem("user-token");

    const logged = users.find((user) => user.sessionToken === storedToken);

    if (!me && logged) {
      setCurrentUser(logged);
    }
  };

  const logout = async () => {
    me && (await usersApi.patch(me.id, { sessionToken: null }));
    setCurrentUser(undefined);
  };

  const post = async ({ title, description }) => {
    const postUsers = await apiDB.getPost();

    const postCard = postUsers.find(
      (post) => post.title === title && post.description === description
    );
    if (postCard) {
      return postCard;
    }
  };
  const following = async (user) => {
    usersApi.patch(me.id, { following: user.id });
    return mapToArray(user);
  };
  const follow = async () => {
    const user = await usersApi.getAll();

    if (user !== me) {
      return mapToArray(user);
    }
  };

  return { me, login, logout, post, follow, following };
};
export { useAuth };

// tenemos los ids de los usuarios a los que seguimos
// tenemos todos los posts
// > hacer una funcion que recorra cada uno de los ids de los usuarios a los que sigo
// y por cada uno de esos ids, comprobar si algun post.usuario_id es igual al id del usuario
// si el usuario.id es == post.usuario_id me guardo ese post en un array
