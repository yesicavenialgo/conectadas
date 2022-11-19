import { mapToArray } from "../helpers";
import { apiDB, apiMoviesDB } from "../utils/axios";

const add = (users) => {
  apiDB.post("/users.json", JSON.stringify(users));
};

const addPost = (post) => {
  apiDB.post("/post.json", JSON.stringify(post));
};

const getAll = async () => {
  const response = await apiDB.get("/users.json");

  return mapToArray(response.data);
};
const getPost = async () => {
  const response = await apiDB.get("/post.json");

  return mapToArray(response.data);
};

const get = async (id) => {
  const response = await apiDB.get(`/${id}.json`);
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

const searchMovies = async (query, page) => {
  const response = await apiMoviesDB.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};
const addMovie = (moviePost) => {
  apiDB.post("/moviePost.json", JSON.stringify(moviePost));
};
const getMoviePost = async () => {
  const response = await apiDB.get("/moviePost.json");

  return mapToArray(response.data);
};
export const usersApi = {
  add,
  getAll,
  get,
  patch,
  remove,
  addPost,
  getPost,
  searchMovies,
  addMovie,
  getMoviePost,
};
