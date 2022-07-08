import ArrowLeft from "../../../svg/ArrowLeft";
import Pdf from "../../../svg/Pdf";
import LockClosed from "../../../svg/LockClosed";
import style from "./buttons.module.scss";
import { DefaultButton } from "./DefaultButton";

export function BuyButtons() {
  return (
    <div className={style.btn_content}>
      <div className={style.even_btn}>
        <div className={style.left}>
          <DefaultButton text={"Atgal"}>
            <ArrowLeft />
          </DefaultButton>
        </div>
        <div className={style.pdf}>
          <DefaultButton text={"PDF pasiūlymas"}>
            <Pdf />
          </DefaultButton>
        </div>
      </div>
      <div className={style.buy}>
        <DefaultButton text={"Pirkti"}>
          <LockClosed />
        </DefaultButton>
      </div>
    </div>
  );
}
