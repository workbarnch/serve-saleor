import style from "./home.module.scss";
import img from "../../images/img_1.png";
import { SympleButton } from "@/components/custom/buttons/SympleButton";

export function HomeHeader() {
  return (
    <section className={style.home__header}>
      <div className={style.left}>
        <div className={style.left__content}>
          <h2>Paslaugų verslo valdymo sistema</h2>
          <p>Pažangūs skaitmeniniai sprendimai įvairioms paslaugų sritims</p>
          <SympleButton type={"dark"}>Išbandyti</SympleButton>
        </div>
      </div>
      <div className={style.right}>
        <img src={img.src} alt="" />
      </div>
    </section>
  );
}
