import style from "../chooseContract/chooseContract.module.scss";
import Radio from "../custom/radio/Radio";
import Pdf from "../../svg/Pdf";
import LockClosed from "../../svg/LockClosed";
import { DefaultButton } from "../custom/buttons/DefaultButton";

interface IChooseContract {
  title?: string;
  title_2?: string;
  subtitle?: string;
  subtitle_2?: string;
  price?: string;
  price_2?: string;
  rebate?: string;
}

export function ChooseContract({
  title,
  title_2,
  subtitle,
  subtitle_2,
  price,
  price_2,
  rebate,
}: IChooseContract) {
  return (
    <div className={style.container}>
      <div className={style.buyContent}>
        <ul>
          <li>
            <Radio name={"choose__contract"} id={"choose__contract-1"} value={1}>
              <div className={style.textWrap}>
                <p>
                  <b>{title}</b>
                </p>
                <span>{subtitle}</span>
              </div>
            </Radio>
            <div className={style.priceWrap}>
              <span>
                <b>{price}</b>
              </span>
            </div>
          </li>
          <li>
            <Radio name={"choose__contract"} id={"choose__contract-2"} value={2}>
              <div className={style.textWrap}>
                <p>
                  <b>{title_2}</b>
                </p>
                <span>{subtitle_2}</span>
              </div>
            </Radio>
            <div className={style.priceWrap}>
              <span>
                <b>{price_2}</b>
              </span>
              <p>{rebate}</p>
            </div>
          </li>
        </ul>
        <div className={style.buttonWrap}>
          <div>
            <DefaultButton text={"Pirkti"}>
              <LockClosed />
            </DefaultButton>
          </div>
          <div>
            <DefaultButton text={"PDF pasiūlymas"}>
              <Pdf />
            </DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
