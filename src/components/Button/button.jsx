import { withAuth } from "../../hoc/whitAuth";
import { useAuth } from "../../hooks/useAuth";

const ButtonPage = () => {
  const { logout } = useAuth();
  return (
    <button className="link" onClick={logout}>
      Salir
    </button>
  );
};
export const Button = withAuth(ButtonPage);
