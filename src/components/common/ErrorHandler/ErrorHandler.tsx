import ErrorIcon from "./ErrorIcon/ErrorIcon";
import style from "./ErrorHandler.module.scss";

export default function ErrorHandler({
  text = "Something went wrong!",
  reset,
}: {
  text?: string;
  reset: () => void;
}) {
  return (
    <div className={style.error}>
      <div className={style.error__icon}>
        <ErrorIcon />
      </div>
      <div className={style.error__content}>
        <h2 className={style.error__header}>{text}</h2>
        <button className={style.error__button} onClick={() => reset()}>
          Click to try again
        </button>
      </div>
    </div>
  );
}
