import css from "./UserItem.module.css";

const UserItem = ({ user, tweets, followers, avatar }) => {
  return (
    <div>
      <li className={css.item}>
        {user}-{tweets}
        {followers}-{avatar}
      </li>
    </div>
  );
};
export default UserItem;
