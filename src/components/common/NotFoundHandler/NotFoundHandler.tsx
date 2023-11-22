"use client";

import NotFoundIcon from "./NotFoundIcon/NotFoundIcon";
import style from "./NotFoundHandler.module.scss";
import { useRouter } from "next/navigation";

export default function NotFoundHandler({
  notFoundName = "Something went wrong!",
  notFoundDescription = "An notFound occurred during runtime",
  pushRoute = "/",
  routeButtonText = "Return to home page",
}: {
  notFoundName?: string;
  notFoundDescription?: string;
  pushRoute?: string;
  routeButtonText?: string;
}) {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.notFound}>
        <div className={style.notFound__icon}>
          <NotFoundIcon />
        </div>
        <div className={style.notFound__content}>
          <h2 className={style.notFound__header}>{notFoundName}</h2>
          <p className={style.notFound__description}>{notFoundDescription}</p>
          <button
            className={style.notFound__button}
            onClick={() => router.push(pushRoute)}
          >
            {routeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
