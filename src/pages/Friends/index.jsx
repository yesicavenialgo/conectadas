import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./style.scss";

const Friends = () => {
  const [listUsers, setListUsers] = useState([]);
  const { me, follow, following } = useAuth();
  const handleSubmit = (user) => {
    following(user);
  };

  useEffect(() => {
    follow().then((user) => {
      setListUsers(user);
    });
  }, []);

  return (
    <>
      <div>
        <h3>Recomendado</h3>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <aside>
                <label>{user.nam}</label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(user);
                  }}
                >
                  Seguir
                </button>
              </aside>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Friends };
