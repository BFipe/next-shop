import ErrorIcon from "./ErrorIcon/ErrorIcon";
import style from "./ErrorHandler.module.scss";
import { useRouter } from "next/navigation";

export default function ErrorHandler({
  errorName = "Something went wrong!",
  errorDescription = "An error occurred during runtime",
  showRetryButton = true,
  reset,
}: {
  errorName?: string;
  errorDescription?: string;
  showRetryButton?: boolean;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.error}>
        <div className={style.error__icon}>
          <ErrorIcon />
        </div>
        <div className={style.error__content}>
          <h2 className={style.error__header}>{errorName}</h2>
          <p className={style.error__description}>{errorDescription}</p>
          {showRetryButton ? (
            <button className={style.error__button} onClick={() => reset()}>
              Click to try again
            </button>
          ) : (
            <button
              className={style.error__button}
              onClick={() => router.push("/")}
            >
              Return to home page
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
