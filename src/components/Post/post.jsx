import { useEffect, useState } from "react";
import { usersApi } from "../../api";

const Post = () => {
  const [listaDePosts, setListaDePosts] = useState([]);

  useEffect(() => {
    usersApi.getPost().then((posts) => {
      setListaDePosts(posts);
    });
  }, []);

  return (
    <>
      <div>
        {listaDePosts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.nam}</h2>
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
