import { ReactNode } from "react";
import style from "./buttons.module.scss";
interface IDefaultButton {
  children?: ReactNode | string;
  text?: string;
  onClick?: () => {};
  unicClass?: string;
}
export function DefaultButton({ children, text, onClick, unicClass }: IDefaultButton) {
  return (
    <button onClick={onClick} className={`${style.default__button} ${unicClass}`}>
      {children ? children : null}
      {text}
    </button>
  );
}
