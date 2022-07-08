import style from "../fancservice/funcservice.module.scss";
import tooth from "../../images/icons/tooth.svg";
import grozi from "../../images/icons/grozi.svg";
import klinikos from "../../images/icons/klinikos.svg";
import spa from "../../images/icons/spa.svg";
import reab from "../../images/icons/reab.svg";
import sporto from "../../images/icons/sporto.svg";
import veterinar from "../../images/icons/veterinar.svg";
import autoservisa from "../../images/icons/autoservisa.svg";
import hands from "../../images/icons/hands.svg";

export default function FuncService() {
  return (
    <div className={style.container}>
      <ul>
        <li className={style.active}>
          <button className={style.servicBlock}>
            <span>
              <img src={tooth.src} alt="tooth" />
            </span>
            <p>Odontologijos klinikos</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={klinikos.src} alt="klinikos" />
            </span>
            <p>Grožio centrai ir kirpyklos </p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={grozi.src} alt="grozi" />
            </span>
            <p>Odontologijos klinikos</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={spa.src} alt="spa" />
            </span>
            <p>SPA ir masažo centrai</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={reab.src} alt="reab" />
            </span>
            <p>Reabilitacijos centrai</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              {" "}
              <img src={sporto.src} alt="sporto" />
            </span>
            <p>Sporto centrai</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={veterinar.src} alt="veterinar" />
            </span>
            <p>Veterinarijos klinikos </p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={autoservisa.src} alt="autoservisa" />
            </span>
            <p>Autoservisu paslaugas</p>
          </button>
        </li>
        <li>
          <button className={style.servicBlock}>
            <span>
              <img src={hands.src} alt="hands" />
            </span>
            <p>Patalpu valymo paslaugos</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
