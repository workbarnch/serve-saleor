import style from "../../custom/customInput/customInput.module.scss";

interface ICustomInput {
  name?: string;
  placeholder?: string;
  label?: string;
  register?: string;
  unicClass?: string;
  type?: string;
}

export default function CustomInput({
  name,
  placeholder,
  label,
  register,
  unicClass,
  type,
}: ICustomInput) {
  return (
    <div className={`${style.inputWrap} ${unicClass}`}>
      <label htmlFor={name}>{label}</label>
      <input name={name} placeholder={placeholder} ref={register} type={type} />
    </div>
  );
}
