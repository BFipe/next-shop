import ErrorIcon from "./ErrorIcon/ErrorIcon";
import style from "./ErrorHandler.module.scss";

export default function ErrorHandler({
  errorName = "Something went wrong!",
  errorDescription = "An error occurred during runtime",
  reset,
}: {
  errorName?: string;
  errorDescription?: string;
  reset: () => void;
}) {
  return (
    <div className={style.container}>
      <div className={style.error}>
        <div className={style.error__icon}>
          <ErrorIcon />
        </div>
        <div className={style.error__content}>
          <h2 className={style.error__header}>{errorName}</h2>
          <p className={style.error__description}>{errorDescription}</p>
          <button className={style.error__button} onClick={() => reset()}>
            Click to try again
          </button>
        </div>
      </div>
    </div>
  );
}
