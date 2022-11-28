import { useEffect, useState } from "react";
import { usersApi } from "../../api";
import { Layout } from "../../components";
import { Post } from "../../components/Post/post";
import { withAuth } from "../../hoc/whitAuth";
import { useAuth } from "../../hooks/useAuth";
import { Friends } from "../Friends";
import "./style.scss";

const inicialData = {
  id: "",
  date: "",
  nam: "",
  lastname: "",
  title: "",
  description: "",
};

const HomePage = () => {
  const [formData, setFormData] = useState(inicialData);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [moviePost, setMoviePost] = useState([]);
  const { me } = useAuth();

  const onSubmit = (formData) => {
    usersApi.addPost(formData);
  };

  useEffect(() => {
    if ((me, date)) {
      setFormData((prevState) => ({
        ...prevState,
        id: me.id,
        nam: me.nam,
        lastname: me.lastname,
        date: date.date,
      }));
    }

    usersApi.getMoviePost().then((movie) => {
      setMoviePost(movie);
    });
  }, []);

  return (
    <Layout>
      <main className="page-home">
        <div>
          <form
            className="form-add-post"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <div className="cardPostHome">
              <label htmlFor=""> ¿ Qué te gustaría compartirnos ?</label>
              <input
                type="text"
                name="title"
                placeholder="Escriba un título"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                name="description"
                placeholder="Escriba una descripción"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
              />
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div>
          <Post />
        </div>
        <div className="cardMovies">
          {moviePost.map((movie) => {
            return (
              <div className="cardMovie" key={movie.id}>
                <span>{movie.date}</span>
                <h2>
                  {movie.nam}
                  {movie.lastname}
                </h2>
                <img
                  src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt=""
                />

                <h3>{movie.original_title}</h3>
                <p>{movie.overview}</p>
              </div>
            );
          })}
        </div>
        <div className="follow">
          <Friends />
        </div>
      </main>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
