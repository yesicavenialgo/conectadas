import { mapToArray } from "../helpers";

const add = (users) => {
  const options = {
    method: "POST",
    body: JSON.stringify(users),
  };

  fetch(
    "https://conectadas-de0e2-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    options
  );
};

const getAll = async () => {
  const response = await fetch(
    "https://conectadas-de0e2-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );
  const data = await response.json();

  return mapToArray(data);
};

const get = async (id) => {
  const response = await fetch(
    `https://conectadas-de0e2-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`
  );
  const data = await response.json();

  return data;
};

const remove = () => {};

const patch = async (id, payload) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(payload),
  };

  const response = await fetch(
    `https://conectadas-de0e2-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
    options
  );

  const data = await response.json();

  return data;
};

export const usersApi = { add, getAll, get, patch, remove };
