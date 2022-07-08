import style from "./buttons.module.scss";
import icon from "../../../images/icons/right-arrow.svg";
import { ReactNode } from "react";

interface INextButton {
  children?: ReactNode | string;
  onClick?: () => {};
}

export default function NextButton({ children, onClick }: INextButton) {
  return (
    <div className={style.next__button}>
      <button onClick={onClick}>
        {children}
        <img className={style.next__button_icon} src={icon.src} alt="icon" />
      </button>
    </div>
  );
}
