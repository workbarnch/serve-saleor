import style from "./prices.module.scss";
import Checkbox from "../custom/checkbox/Checkbox";
import {CountInput} from "../custom/countinput/CountInput";
import Info from "../../svg/Info";
import {DropDown} from "../custom/dropdown/DropDown";

export default function ContentTwo(){
    return (
        <div className={style.modules}>
            <div className={style.module}>
                <h3>Pasirinkite modulius</h3>
                <div className={style.modules__items}>
                    <Checkbox id={'one'} unicClass={style.modules__checkbox} checked/>
                    <div className={style.dropdown__container}>
                        <DropDown title={'Sąsaja su „Serve Online“ rezervacijų sistema“'} arrowUnicClass={style.dropdown__arrow}>
                            <div className={style.dropdown__item}>
                                lorem ipsum
                            </div>
                        </DropDown>
                    </div>
                    <div className={style.module__item_right}>
                        <span className={style.price}>4,00 &euro;</span>
                        <span className={style.info__icon}><Info /></span>
                    </div>
                </div>
                <div className={style.employee__count}>
                    <h3>Darbuotojų skaičius:</h3>
                    <CountInput defaultValue={7}/>
                </div>

            </div>
            <div className={style.module}>
                <h3>Pasirinkite modulius</h3>
                <div className={style.modules__items}>
                    <Checkbox id={'two'} unicClass={style.modules__checkbox}/>
                    <div className={style.dropdown__container}>
                    <DropDown title={'Sąsaja su „Serve Online“ rezervacijų sistema“'} arrowUnicClass={style.dropdown__arrow}>
                        <div className={style.dropdown__item}>
                            lorem ipsum
                        </div>
                    </DropDown>
                    </div>
                    <div className={style.module__item_right}>
                        <span className={style.price}>4,00 &euro;</span>
                        <span className={style.info__icon}><Info /></span>
                    </div>
                </div>
                <div className={style.employee__count}>
                    <h3>Darbuotojų skaičius:</h3>
                    <CountInput />
                </div>

            </div>
        </div>
    )
}
