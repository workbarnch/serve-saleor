import ArroDown from "../../../svg/ArrowDown";
import style from "../selects/defaultSelect.module.scss";

export default function DefaultSelect({ label= "", unicClass = "",option = ""}) {
  return (
    <div className={style.select_content}>
      <label htmlFor="">{label}</label>
      <select className={`${style.select_options} ${unicClass}`}>
        <option value="0">{option}</option>
        <option value="1">Andorra</option>
        <option value="2">Belgium</option>
        <option value="3">Chile</option>
        <option value="4">France</option>
        <option value="5">Hungary</option>
        <option value="6">Japan</option>
      </select>
      <div className={style.selected}><ArroDown/></div>
    </div>
  );
}
