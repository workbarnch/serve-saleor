import style from "./minicontainer.module.scss";
// import addressIcon from "../../images/icons/imoniu_grupr.svg";
import { ReactNode } from "react";

interface IMiniContainer {
  children?: ReactNode,
  title?: string,
  showAddress?: boolean,
  address?: string,
  mail?: string,
  unicClass?: string,
  unicClass_cont?: string,
  unicClass_address?: string,
  text?: string,
}

export default function MiniContainer({
  children,
  title,
  showAddress = false,
  address = "",
  mail = "",
  unicClass = "",
  unicClass_cont = "",
  unicClass_address = "",
  text = "",
}) {
  return (
    <div className={`${style.container} ${unicClass ? unicClass : ""}`}>
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      <div
        className={`${style.content} ${unicClass_cont ? unicClass_cont : ""}`}
      >
        {showAddress ? (
          <div
            className={`${style.address__container} ${
              unicClass_address ? unicClass_address : ""
            }`}
          >
            <div className={style.address__icon}>
              111
              {/* <img src={addressIcon.src} alt="address" /> */}
            </div>
            <div className={style.address__content}>
              <p className={style.address}>{address}</p>
              <p className={style.text1}>{text}</p>
              <p className={style.mail}>{mail}</p>
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
