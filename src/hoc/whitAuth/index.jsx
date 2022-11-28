import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const publicRoutes = ["/Login", "/SignUp"];

const withAuth = (Component) => {
  const Authenticated = () => {
    const { me } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/Home");
      }

      if (!me && !publicRoutes.includes(location.pathname)) navigate("/Login");
    }, [me]);

    return <Component />;
  };

  return Authenticated;
};
export { withAuth };
