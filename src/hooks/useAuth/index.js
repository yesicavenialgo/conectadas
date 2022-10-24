import { usersApi } from "../../api";

const useAuth = () => {
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
      }
    }
  };
  return { login };
};
export { useAuth };
