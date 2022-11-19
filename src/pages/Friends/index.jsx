import { useState, useEffect } from "react";
import { usersApi } from "../../api";

const Friends = () => {
  const [listUsers, setListUsers] = useState([]);

  const handleSubmit = () => {
    "aca van los usuarios que se decidió seguir";
  };
  useEffect(() => {
    usersApi.getAll().then((user) => {
      setListUsers(user);
    });
  }, []);
  return (
    <div>
      {listUsers.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.nam}</h3>
            <button onClick={handleSubmit()}>Seguir</button>
          </div>
        );
      })}
    </div>
  );
};

export { Friends };
