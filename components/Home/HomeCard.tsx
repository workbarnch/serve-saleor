import style from "./home.module.scss";
import ArrowDownIcon from "../../svg/ArrowDownIcon";
export function HomeCard({
  unicClass = "",
  img = "",
  icon = "",
  title = "Title",
  description = "Description",
}) {
  return (
    <section className={`${style.home__card} ${unicClass}`}>
      <div className={style.home__card_images}>
        <img className={style.home__card_img} src={img} alt="img" />
        <img className={style.home__card_icon} src={icon} alt="icon" />
      </div>
      <div className={style.home__card_info}>
        <h2>
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
        </h2>
        <p>{description}</p>
      </div>
      <div className={style.home__card_arrow}>
        <ArrowDownIcon />
      </div>
    </section>
  );
}
