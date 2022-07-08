import style from "./prices.module.scss";
import Checkbox from "../custom/checkbox/Checkbox";
import { CountInput } from "../custom/countinput/CountInput";
import Info from "../../svg/Info";
import { DropDown } from "../custom/dropdown/DropDown";
import ArrowLeft from "../../svg/ArrowLeft"
import { BuyButtons } from "../custom/buttons/BuyButtons";
import { DefaultButton } from "../custom/buttons/DefaultButton";


export default function ContentOne() {
  return (
    <div className={style.modules}>
      <div className={style.module}>
        <h3>Pasirinkite modulius</h3>
        <div className={style.modules__items}>
          <Checkbox
            id={"one"}
            checked
            unicClass={style.modules__checkbox}
          ></Checkbox>
          <div className={style.dropdown__container}>
            <DropDown
              title={"Užsakymų registravimo kalendorius"}
              arrowUnicClass={style.dropdown__arrow}
              mr
            >
              <div className={style.dropdown__item}>
                <div className={style.paragraf1}>
                  <h4>
                    Viskas kas įeina į modulį Užsakymų registravimo
                    kalendorius
                  </h4>
                  <h2>Papildomai:</h2>
                  <br />
                  <h4>Užsakymų registravimo kalendorius:</h4>
                  <p>
                    - Laukiančiųjų užregistruoti užsakymų kūrimas;
                    <br /> - Konfidencialūs paslaugų užsakymai;
                    <br /> - Individualus darbuotojo kalendoriu;
                    <br />- Darbo zonų / įrangų užimtumo kontrolė ir
                    kalendorius;
                  </p>
                </div>
                <div className={style.paragraf2}>
                  <h4>Funkcijos:</h4>
                  <p>
                    - Užsakymo žymos greitai peržiūrai / redagavimui;
                    <br /> - Duomenų kaupimo funkcijos iš užsakymo kortelės:
                  </p>
                </div>
                <ul className={style.paragraf3}>
                  <li>
                    <span>• Kliento informacija; </span>
                  </li>
                  <li>
                    <span>
                      • Užsakymo būsenos kontrolė (atvyko / atvyks / neatvyks /
                      neatvyko);
                    </span>
                  </li>
                  <li>
                    <span>
                      • Kliento užsakymų istorija pagal filialus, darbuotojus,
                      būsenas, priminimų spausdinimas, siuntimas;
                    </span>
                  </li>
                  <li>
                    <span>• Praeities ir ateities užsakymų pastab</span>
                  </li>
                  <li>
                    <span>
                      • Kliento failai: nuotraukos, sutartys ir kt. dokumentai
                    </span>
                  </li>
                  <li>
                    <span>
                      • Asmens sveikatos istorija - elektroninė kortelė:
                    </span>
                  </li>
                </ul>
                <div className={style.paragraf4}>
                  <p>
                    Kliento ir jo atstovo kontaktai; <br />
                    Specialūs sveikatos įrašai,
                    <br />
                    Dantų formulė - pokyčių istorija,
                    <br />
                    Gydytojų įrašai,
                    <br />
                    Siuntimai, mokinio pažymėjimai,
                    <br />
                    Receptai, <br />
                    Injekcijų žemėlapis.
                  </p>
                </div>
                <div className={style.paragraf5}>
                  <h4>SMS:</h4>
                  <p>
                    - SMS priminimai prieš vizitą, <br />
                    - Priminimai periodinėm paslaugom <br />
                    - Gimtadienio sveikinimai
                    <br />
                    - Reklama / informacija / apklausa. <br />- Sutikimų siųsti
                    SMS nustatymai.
                  </p>
                </div>
                <div className={style.paragraf6}>
                  <h4>Klientų kartoteka: </h4>
                  <p>
                    - Filtavimas pagal klientų grupes, lytį, rinkodaros žymą,
                    gimtadinio mėnesį,
                    <br />
                    priskyrimą <br />
                    darbuotojui, sąrašo spausdinimas ir eksportas; <br />
                    - SMS siuntimas visiems klientams pagal filtrus - reklama /
                    informacija / apklausa;
                    <br />
                    tipus, kontaktus, tekstus, būsenas.
                  </p>
                </div>
                <div className={style.paragraf7}>
                  <h4>Ataskaitos:</h4>
                  <p>
                    - Klientų lankomumo ataskaita,filtravimas pagal apsilankymų
                    kiekį,laikotarpį, grupių ir kt. požymius, SMS siuntimas -
                    reklama / informacija / apklausa darbuotojui, sąrašo
                    spausdinimas ir eksportas;
                    <br />- Išsiųstų ir gautų SMS žinučių ataskaitos: sukūrimo
                    ir išsiuntimo laikai pagal SMS tipus, kontaktus, tekstus,
                    būsenas.
                  </p>
                </div>
              </div>
              <div className={style.back_btn}><DefaultButton text={"Atgal"}><ArrowLeft/></DefaultButton></div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"two"} checked unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Ryšių su klientais valdymas"}
              arrowUnicClass={style.dropdown__arrow}
              mr
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"three"} checked unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Personalo administravimas"}
              arrowUnicClass={style.dropdown__arrow}
              mr
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"fore"} checked unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Finansinės operacijos ir ataskaitos"}
              arrowUnicClass={style.dropdown__arrow}
              mr
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"five"} checked unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Prekių sandėlio valdymas"}
              arrowUnicClass={style.dropdown__arrow}
              mr
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"six"} unicClass={style.modules__checkbox} checked />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Dokumentų pildymas ir protokolų kūrimas"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"seven"} unicClass={style.modules__checkbox} checked />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Gydymo plano sudarymas"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"eight"} unicClass={style.modules__checkbox} checked />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Filialu valdymas"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"nine"} unicClass={style.modules__checkbox} checked />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Sąsaja su buhalterine programa „Rivilė“"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"then"} unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"TLK kompensacijų administravimas"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"eleven"} unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"TLK kompensacijų administravimas"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.modules__items}>
          <Checkbox id={"twelve"} unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Sąsaja su „E sveikata“"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.employee__count}>
          <h3>Darbuotojų skaičius:</h3>
          <CountInput defaultValue={7} />
        </div>
      </div>
      <div className={style.module}>
        <h3>Pasirinkite modulius</h3>
        <div className={style.modules__items}>
          <Checkbox id={"t"} unicClass={style.modules__checkbox} />
          <div className={style.dropdown__container}>
            <DropDown
              title={"Sąsaja su „Serve Online“ rezervacijų sistema“"}
              arrowUnicClass={style.dropdown__arrow}
            >
              <div className={style.dropdown__item}>lorem ipsum</div>
            </DropDown>
          </div>
          <div className={style.module__item_right}>
            <span className={style.price}>4,00 &euro;</span>
            <span className={style.info__icon}>
              <Info />
            </span>
          </div>
        </div>
        <div className={style.employee__count}>
          <h3>Darbuotojų skaičius:</h3>
          <CountInput />
        </div>
      </div>
      <BuyButtons/>
    </div>
  );
}
