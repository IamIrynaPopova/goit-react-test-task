import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import fetchUsers from "../../redux/operations";
import css from "./UserList.module.css";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {users.map((customer) => {
          const { user, tweets, followers, avatar, id } = customer;
          return (
            <UserItem
              key={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
            />
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
