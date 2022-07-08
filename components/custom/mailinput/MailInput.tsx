import style from "../../custom/mailinput/mailInput.module.scss";
import Envelope from "../../../images/icons/envelope.svg";

interface IMailInput {
  type?: string,
  placeholder?: string,
  name?: string,
  unicClass?: string,
  label?: string,
}

export default function LoginInput({
  type,
  placeholder,
  name,
  unicClass,
  label,
}: IMailInput) {
  return (
    <div className={`${style.container} ${unicClass}`}>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} type={type} />
      <div className={style.buttons}>
        <img src={Envelope.src} alt="envelope" />
      </div>
    </div>
  );
}
