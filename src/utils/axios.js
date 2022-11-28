import axios from "axios";

const apiMoviesDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c868b8332baf4562f9aa52b9846a68a7",
  },
});

const apiDB = axios.create({
  baseURL:
    "https://conectadas-de0e2-default-rtdb.europe-west1.firebasedatabase.app",
});
export { apiMoviesDB, apiDB };
