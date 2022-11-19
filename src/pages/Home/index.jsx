import { useEffect, useState } from "react";
import { usersApi } from "../../api";
import { Layout } from "../../components";
import { Post } from "../../components/Post/post";
import { withAuth } from "../../hoc/whitAuth";
import { useAuth } from "../../hooks/useAuth";
import { Friends } from "../Friends";

import "./style.scss";

const inicialData = {
  nam: "",
  title: "",
  description: "",
};

const HomePage = () => {
  const [formData, setFormData] = useState(inicialData);
  const [moviePost, setMoviePost] = useState([]);
  const { me } = useAuth();

  const onSubmit = (formData) => {
    usersApi.addPost(formData);
  };

  useEffect(() => {
    if (me) {
      setFormData((prevState) => ({
        ...prevState,
        nam: me.nam,
      }));
    }

    usersApi.getMoviePost().then((movie) => {
      setMoviePost(movie);
    });
  }, []);

  return (
    <Layout>
      <main className="page home">
        <div>
          <form
            className="form-add-post"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <div className="">
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
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div>
          <Post />
        </div>
        <div>
          {moviePost.map((movie) => {
            return (
              <div key={movie.id}>
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
        <div>
          <Friends />
        </div>
      </main>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
