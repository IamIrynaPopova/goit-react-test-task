import UserItem from "../UserItem/UserItem";
import css from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <>
      <ul className={css.list}>
        {users.map((customer) => {
          const { user, tweets, followers, avatar, id } = customer;
          return (
            <UserItem
              id={id}
              user={user}
              key={id}
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
