import { useState, useEffect } from "react";
import { usersApi } from "../../api";
import { Layout } from "../../components";
import { withAuth } from "../../hoc/whitAuth";
import { useAuth } from "../../hooks/useAuth";
import "./style.scss";

const SearchMoviePage = () => {
  const [listMovies, setListMovies] = useState([]);

  const date = new Date();
  const { me } = useAuth();

  const searchMovie = (e) => {
    e.preventDefault();
    const movie = e.target.value;

    if (e.target.value !== "") {
      usersApi.searchMovies(movie).then((movie) => {
        setListMovies(movie.results);
      });
    } else {
      setListMovies([]);
    }
  };

  useEffect(() => {
    if ((me, date)) {
      setListMovies((prevState) => ({
        ...prevState,
        id: me.id,
        nam: me.nam,
        lastname: me.lastname,
        date: date.date,
      }));
    }
  }, []);

  const handleSubmit = (movie) => {
    usersApi.addMovie(movie);
  };
  return (
    <Layout>
      <main className="page movies">
        <div className="">
          <input
            className="search"
            type="text"
            placeholder="Buscar película"
            name="searchMovie"
            onChange={searchMovie}
          />
        </div>

        <div className="movies">
          <ul>
            {listMovies && listMovies.length > 0
              ? listMovies.map((movie) => {
                  return (
                    <div className="cardMovie" key={movie.id}>
                      <li>
                        <img
                          src={
                            "http://image.tmdb.org/t/p/w500/" +
                            movie.poster_path
                          }
                          alt=""
                        />

                        <h3>{movie.original_title}</h3>
                        <p>{movie.overview}</p>
                        <button
                          onClick={() => {
                            handleSubmit(movie);
                          }}
                        >
                          Compartir
                        </button>
                      </li>
                    </div>
                  );
                })
              : ""}
          </ul>
        </div>
      </main>
    </Layout>
  );
};
export const SearchMovie = withAuth(SearchMoviePage);
