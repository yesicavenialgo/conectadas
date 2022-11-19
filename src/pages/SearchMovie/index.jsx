import { useState, useEffect } from "react";
import { usersApi } from "../../api";
import { Layout } from "../../components";
import { withAuth } from "../../hoc/whitAuth";

const SearchMoviePage = () => {
  const [listMovies, setListMovies] = useState([]);

  const searchMovie = (e) => {
    e.preventDefault();
    const movie = e.target.value;

    if (e.target.value !== "") {
      usersApi.searchMovies(movie).then((movie) => {
        console.log("aca tenemos las movies", movie);
        setListMovies(movie.results);
      });
    } else {
      setListMovies([]);
    }
  };

  useEffect(() => {}, [listMovies]);

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

        <div>
          {listMovies && listMovies.length > 0
            ? listMovies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <img
                      src={
                        "http://image.tmdb.org/t/p/w500/" + movie.poster_path
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
                  </div>
                );
              })
            : ""}
        </div>
      </main>
    </Layout>
  );
};
export const SearchMovie = withAuth(SearchMoviePage);
