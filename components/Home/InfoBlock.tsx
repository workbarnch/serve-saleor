import style from "./home.module.scss";
import Logo from "../../images/Logo-4.png";
import Person from "../../images/person.jpg";

export function InfoBlock() {
  return (
    <section className={style.home__info_block}>
      <img className={style.home__info_block_logo} src={Logo.src} alt="logo" />
      <p className={style.home__info_block_desc}>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
        sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
      </p>
      <div className={style.home__person__info}>
        <img src={Person.src} alt="person" />
        <p>
          <span className={style.home__person__name}>Jolita Sereikaitė</span>
          <span className={style.home__person__space}>/</span>
          <span className={style.home__person__skill}>CEO, Workcation</span>
        </p>
      </div>
    </section>
  );
}
