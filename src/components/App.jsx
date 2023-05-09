import { useState, useEffect } from "react";
import fetchUsers from "../services/api";
import UserList from "./UserList/UserList";
import Layout from "./Layout/Layout";
import LoadMore from "./LoadMore/LoadMore";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      } catch (error) {
        setError(error);
      }
    };
    getUsers();
  }, [page]);

  return (
    <Layout>
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          <UserList users={users.slice(0, page * 3)} />
          {users.length > page * 3 && (
            <LoadMore handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </Layout>
  );
};
export default App;
