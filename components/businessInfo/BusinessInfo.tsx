import style from "../../components/businessInfo/businessInfo.module.scss";
import CustomInput from "../custom/customInput/CustomInput";
import NextButton from "../custom/buttons/NextButton";
import { InputPlace } from "../inputPlace/InputPlace";

export default function BusinessInfo() {
  return (
    <div className={style.businessInfo}>
      <InputPlace  title={"Jūsų įmonės duomenys"}>
        <div className={style.inputWrap}>
          <div className={style.leftSide}>
            <CustomInput type={"text"} placeholder={"Įmonės pavadinimas"} />
            <CustomInput type={"text"} placeholder={"Įmonės kodas"} />
            <CustomInput type={"text"} placeholder={"Įmonės PVM kodas"} />
            <CustomInput type={"text"} placeholder={"Sąskaitos numeris"} />
            <CustomInput
              type={"text"}
              placeholder={"Sutartį pasirašančio - vardas, pavardė"}
            />
            <CustomInput
              type={"text"}
              placeholder={"Sutartį pasirašančio - el. pašto adresas"}
            />
          </div>
          <div className={style.rightSide}>
            <CustomInput type={"text"} placeholder={"Šalis"} />
            <CustomInput type={"text"} placeholder={"Miestas"} />
            <CustomInput type={"text"} placeholder={"Gatvė"} />
            <div className={style.inputs}>
              <CustomInput type={"text"} placeholder={"Namo nr."} />
              <CustomInput type={"text"} placeholder={"Buto nr."} />
            </div>
            <CustomInput type={"text"} placeholder={"El. pašto adresas"} />
            <CustomInput type={"text"} placeholder={"Telefono numeris"} />
          </div>
        </div>
      </InputPlace>
      <NextButton>Toliau</NextButton>
    </div>
  );
}
