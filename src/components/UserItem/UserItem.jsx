import { useState, useEffect } from "react";
import logo from "../../images/Logo.png";
import picture from "../../images/picture.png";
import css from "./UserItem.module.css";

const UserItem = ({ user, tweets, followers, avatar, id }) => {
  const [following, setFollowing] = useState(false);
  const [userFollowers, setUserFollowers] = useState(followers);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((user) => user.id === id);
    if (existingUser) {
      setFollowing(true);
    }
  }, [id]);

  const handleFollow = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((user) => user.id === id);

    if (!existingUser) {
      const isFollowingUser = {
        user,
        tweets,
        followers: followers + 1,
        avatar,
        id,
      };
      users.push(isFollowingUser);
      setUserFollowers(userFollowers + 1);
      localStorage.setItem("users", JSON.stringify(users));
      setFollowing(true);
    } else {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUserFollowers(userFollowers - 1);
      setFollowing(false);
    }
  };

  return (
    <li className={css.user}>
      <div className={css.user__card}>
        <img src={logo} alt="logo" className={css.user__logo} />
        <img src={picture} alt="miniature" className={css.user__picture} />
        <div className={css.user__rectangle} />
        <div className={css.user__circle}>
          <img src={avatar} alt="user avatar" className={css.user__avatar} />
        </div>
        <div className={css.user__stats}>
          <span className={css.user__tweets}>{tweets} tweets</span>
          <span className={css.user__followers}>{userFollowers} Followers</span>
          <button
            type="button"
            className={`${css.user__button} ${
              following ? css["user__button--following"] : ""
            }`}
            onClick={handleFollow}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </li>
  );
};
export default UserItem;
