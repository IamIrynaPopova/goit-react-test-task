import css from "./UserItem.module.css";
import logo from "../../images/Logo.png";
import picture from "../../images/picture.png";

const UserItem = ({ tweets, followers, avatar }) => {
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
          <span className={css.user__followers}>{followers} Followers</span>
          <button type="button" className={css.user__button}>
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default UserItem;
