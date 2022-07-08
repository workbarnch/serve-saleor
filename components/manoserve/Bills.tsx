import style from './style.module.scss';
import {Euro} from "../../svg/Euro";
import {PaymentButton} from "../custom/buttons/PaymentButton";
import {DropDown} from "../custom/dropdown/DropDown";
import {SympleButton} from "../custom/buttons/SympleButton";

export function Bills() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.late__payments}>
                    <h2 className={style.title}>Pradelsti mokėjimai</h2>
                    <p className={style.subtitle}>Prašome sumokėti skolą</p>
                    <p className={style.price}>120,00 &euro;</p>
                    <div className={style.button}>
                        <PaymentButton text={'Sumokėti'}>
                            <Euro />
                        </PaymentButton>
                    </div>
                </div>
                <div className={style.drop__down}>
                    <DropDown open title={'Sąskaitos'} unicContentClass={style.drop__down_content}>
                            <div className={style.block}>
                                <button className={style.drop__down_button}>
                                    <p className={`${style.drop__down_title_and_price} ${style.active}`}>
                                        <span className={style.drop__down_title}>2022 Sausis 14 d.</span>
                                        <span className={style.price}>120,00 &euro;</span>
                                    </p>
                                    <p className={style.drop__down_subtitle}>Apmokėti iki 2022 Sausio 19 d.</p>
                                </button>
                                <button className={style.drop__down_button}>
                                    <p className={style.drop__down_title_and_price}>
                                        <span className={style.drop__down_title}>2022 Sausis 14 d.</span>
                                        <span className={style.price}>120,00 &euro;</span>
                                    </p>
                                    <p className={style.drop__down_subtitle}>Apmokėti iki 2022 Sausio 19 d.</p>
                                </button>
                                <button className={style.drop__down_button}>
                                    <p className={style.drop__down_title_and_price}>
                                        <span className={style.drop__down_title}>2022 Sausis 14 d.</span>
                                        <span className={style.price}>120,00 &euro;</span>
                                    </p>
                                    <p className={style.drop__down_subtitle}>Apmokėti iki 2022 Sausio 19 d.</p>
                                </button>
                                <button className={style.drop__down_button}>
                                    <p className={style.drop__down_title_and_price}>
                                        <span className={style.drop__down_title}>2022 Sausis 14 d.</span>
                                        <span className={style.price}>120,00 &euro;</span>
                                    </p>
                                    <p className={style.drop__down_subtitle}>Apmokėti iki 2022 Sausio 19 d.</p>
                                </button>
                            </div>

                    </DropDown>
                    {/*
                        ${style['payment__history-active']} for active state
                    */}
                    <button className={`${style.payment__history}`}>Mokėjimų istorija</button>
                </div>
            </div>
            <div className={style.right}>
                <h2 className={style.title}>Sąskaita</h2>
                <div className={style.info}>
                    <p>
                        <span className={style.info__title}>2022 Sausis 14 d.</span>
                        <span className={style.info__subtitle}>SF 000000345</span>
                    </p>
                    <p>
                        <span className={style.info__title}>120,00 &euro;</span>
                        <span className={style.info__subtitle}>Apmokėti iki 2022 Sausio 19 d.</span>
                    </p>
                    <SympleButton>Atsisiūsti sąskaitą PDF</SympleButton>
                </div>
                <div className={style.content}>
                    <div className={style.content__header}>
                        <h2>Moduliai</h2>
                        <h2>Darbuotojų skaičius: 7</h2>
                    </div>
                    <div className={style.content__header_mobile}>
                        <h2>Moduliai</h2>
                    </div>
                    <div className={style.content__items}>
                        <div className={style.content__item}>
                            <span>Užsakymų registravimo kalendorius</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Ryšių su klientais valdymas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Personalo administravimas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Finansinės operacijos ir ataskaitos</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Prekių sandėlio valdymas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Dokumentų pildymas ir protokolų kūrimas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Gydymo plano sudarymas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Filialu valdymas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Sąsaja su buhalterine programa „Rivilė“</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>TLK kompensacijų administravimas</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Gydytojo įrašo pasirašymas el. parašu</span>
                            <span>100 &euro;</span>
                        </div>
                        <div className={style.content__item}>
                            <span>Sąsaja su „E sveikata“</span>
                            <span>100 &euro;</span>
                        </div>
                    </div>
                    <div className={style.content__footer_mobile}>
                        <h2>Darbuotojų skaičius: </h2>
                        <h2>7</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
