import { useEffect, useState } from "react";
import { usersApi } from "../../api";

import "./style.scss";

const Post = () => {
  const [listaDePosts, setListaDePosts] = useState([]);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    usersApi.getPost().then((posts) => {
      setListaDePosts(posts);
    });
  }, []);

  return (
    <>
      <div className="containerPost">
        {listaDePosts.map((post) => {
          return (
            <div className="cardPost" key={post.id}>
              <span>{date}</span>
              <h2>
                {post.nam}
                {post.lastname}
              </h2>
              <h3>{post.title}</h3>
              <p> {post.description}</p>
              <input />
              <button>Comentar</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Post };
