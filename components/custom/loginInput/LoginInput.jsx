import style from "../loginInput/loginInput.module.scss";
import { useState } from "react";
import showIcon from "../../../images/icons/akis.svg";
import lockIcon from "../../../images/icons/lock.svg";
import hideIcon from "../../../images/icons/akis_perbraukta.svg";

export default function LoginInput({
  type,
  placeholder = "",
  onChange = () => {},
  name = "",
  defaultValue = "",
  unicClass = "",
  label = "",
}) {
  const [show, setShow] = useState(false);

  const eventShowHide = () => {
    setShow(!show);
  };
  return (
    <div className={`${style.container} ${unicClass}`}>
      <label>{label}</label>
      <input
        type={show ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {type === "password" ? (
        <div className={style.buttons}>
         <img src={lockIcon.src} alt="show" className={style.lock} />
          {show ? (
            <img
              src={showIcon.src}
              alt="show"
              className={style.show}
              onClick={eventShowHide}
            />
          ) : (
            <img
              src={hideIcon.src}
              alt="hide"
              className={style.hide}
              onClick={eventShowHide}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
