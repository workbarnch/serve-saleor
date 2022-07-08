import { ReactNode } from "react";
import style from "../inputPlace/inputPlace.module.scss";

interface IInputPlace {
  unicClass?: string
  title?: string,
  children?: ReactNode
}

export function InputPlace({
  unicClass,
  title,
  children
}: IInputPlace) {
  return (
    <div className={`${style.businessInfoWrap} ${unicClass}`}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <div className={style.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
