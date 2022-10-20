import { Layout } from "../../components";

const Friends = () => {
  const searchFriend = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <main className="page friends">
        <div className="">
          <input type="text" name="searchFriend" onSubmit={searchFriend} />
          <button type="submit">Buscar</button>
        </div>
      </main>
    </Layout>
  );
};

export { Friends };
