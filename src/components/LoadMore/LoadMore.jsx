import css from "./LoadMore.module.css";

const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={css.button__wraper}>
      <button type="button" className={css.button} onClick={handleLoadMore}>
        LoadMore
      </button>
    </div>
  );
};

export default LoadMore;
