import { useState } from "react";
import ArrowLeft from "svg/ArrowLeft";
import Search from "svg/Search";
import { ChooseContract } from "../chooseContract/ChooseContract";
import { DefaultButton } from "../custom/buttons/DefaultButton";
import NextButton from "../custom/buttons/NextButton";
import CustomInput from "../custom/customInput/CustomInput";
import Radio from "../custom/radio/Radio";
import FuncService from "../fancservice/FuncServe";
import style from "../prices/prices.module.scss";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";

export function Prices() {
  const [content, setContent] = useState(1);
  const changeContent = (e:any) => {
    setContent(+e.target.value);
  };
  return (
    <div className={style.container}>
      <div className={style.selectSystem}>
        <h2>Pasirinkite sistema</h2>
        <ul>
          <li>
            <Radio
              name={"content__navigation"}
              id={"content__navigation-1"}
              value={1}
              checked={content === 1}
              unicClass={style.content__navigation__buttons}
              onChange={changeContent}
            >
              <span>
                <b>Kompiuterinė sistema „Serve Professionals”</b>
                <p>
                  Į Jūsų kompiuterinę įrangą įdiegiama sistema ir duomenų bazė.
                </p>
              </span>
            </Radio>
          </li>
          <li>
            <Radio
              name={"content__navigation"}
              id={"content__navigation-2"}
              value={2}
              checked={content === 2}
              unicClass={style.content__navigation__buttons}
              onChange={changeContent}
            >
              <span>
                <b>Naršyklinė sistema „ServePro”</b>
                <p>
                  Prie savo sistemos ir duomenų bazės esančios mūsų serveryje
                  jungiatės per naršyklę.
                </p>
              </span>
            </Radio>
          </li>
        </ul>
        <div className={style.next_btn}>
          <NextButton>Toliau</NextButton>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.area_title}>
          <h3>Pasirinkite sritį</h3>
        </div>
        <div className={style.services}>
          <div className={style.mobile_services}>
            <div className={style.input_wrapp}>
              <CustomInput />
              <div className={style.search_btn}>
                <Search />
              </div>
            </div>
            <FuncService />
          </div>
          <div className={style.back_btn}>
            <DefaultButton text={"Atgal"}>
              <ArrowLeft />
            </DefaultButton>
          </div>
        </div>
        {content === 1 ? <ContentOne /> : <ContentTwo />}
        <div className={style.right__block}>
          <ChooseContract
            title={"Neterminota sutartis"}
            title_2={"Metine sutartis"}
            subtitle={"kaina menesiui"}
            subtitle_2={"kaina menesiui"}
            price={"15,00 €"}
            price_2={"15,00 €"}
            rebate={"15,00 €"}
          />
        </div>
      </div>
    </div>
  );
}
