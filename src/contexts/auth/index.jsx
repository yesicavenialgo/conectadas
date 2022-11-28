import { useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
const AuthContext = createContext({ me: undefined, setCurrentUser: () => {} });
const AuthProvider = ({ children }) => {
  const [me, setMe] = useState();
  const setCurrentUser = (newUser) => {
    setMe(newUser);
  };
  return (
    <AuthContext.Provider value={{ me, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
