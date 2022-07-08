import style from "../functionspage/functionspage.module.scss";
import photo from "../../images/icons/photo.png";
import { DefaultButton } from "../custom/buttons/DefaultButton";

export default function FunctionsPage() {
  return (
    <div className={style.func_content}>
      <div className={style.img_wrapp}>
        <img src={photo.src} alt="" />
      </div>
      <div className={style.choos_btn}>
        <DefaultButton text={"Pasirinkti"} />
      </div>
      <div className={style.order_reg}>
        <h3>Užsakymų registravimo kalendorius</h3>
        <ul>
          <li>Paslaugų užsakymo kalendorius pagal specialistus ir filialus.</li>
          <li>Kabinetų / įrangos užimtumo kalendorius ir kontrolė.</li>
          <li>Paslaugų registracija internetu 24/7.</li>
          <li>Spalvinės užsakymų būsenų ir darbo grafikų žymos.</li>
          <li>Darbo valandų užpildymas laukiančiųjų užsakymais.</li>
          <li>Atšauktų užsakymų perkėlimas, nedarbo priežasčių žymėjimas.</li>
          <li>Susirašinėjimas tarp darbuotojų.</li>
          <li>Duomenų apie klientus apsaugos įrankiai.</li>
          <li>Tvarkaraščių formavimas.</li>
          <li>Kalbos pasirinkimas (lietuvių, anglų, rusų).</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Paslaugų užsakymai</h3>
        <ul>
          <li>Užsakymų tvarkymas kalendoriuje „Drag & Drop“ principu („Temp ir paleisk“).</li>
          <li>Spalvinės užsakymų žymos pagal vykdymo ir apmokėjimo būseną.</li>
          <li>
            Paslaugų diferencijavimas pagal trukmę / apimtis, filialus, specialistus, jų
            kvalifikaciją.
          </li>
          <li>Paslaugų paketai, pertraukos, patalpų/ įrangos priskyrimas, kaštų nustatymai.</li>
          <li>
            Sparčiosios žymos (naujas klientas, trūksta duomenų, gimtadienis, yra pastaba, yra spec.
            informacija, yra TLK kompensacija).
          </li>
          <li>Užsakymų būsenų, trukmės, kainų ir nuolaidų kontrolė.</li>
          <li>
            Greitas užsakymo įvedimas, tvirtinimas, detali peržiūra, visų kliento užsakymų
            kalendoriuje identifikavimas.
          </li>
          <li>Greita paieška: būsimi klientų užsakymai, apsilankymų ir pastabos.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>SMS</h3>
        <ul>
          <li>Priminimai prieš užsakymą.</li>
          <li>Spalvinės užsakymų žymos pagal vykdymo ir apmokėjimo būseną.</li>
          <li>Periodiniai priminimai.</li>
          <li>Gimtadienio sveikinimai.</li>
          <li>Reklama / informacija / apklausa.</li>
          <li>Darbuotojams: artimiausios darbo dienos darbotvarkė pagal valandas.</li>
          <li>Vadovui: einamosios dienos pajamos ir įplaukos.</li>
          <li>Sutikimų siųsti SMS nustatymai.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Kliento kortelė</h3>
        <ul>
          <li>Bendra klientų duomenų bazė visiems įmonės filialams.</li>
          <li>Kliento užsakymų istorija pagal filialus, darbuotojus, užsakymų būsenas.</li>
          <li>Personalizuoti nustatymai: nuolaidos, SMS, rinkodaros žymos.</li>
          <li>Kliento anketos ir kitų dokumentų eksportavimas/ spausdinimas.</li>
          <li>Asmens sveikatos istorija (elektroninė/ spausdinta).</li>
          <li>Kliento atstovo kontaktai.</li>
          <li>Specialūs sveikatos įrašai.</li>
          <li>Dantų formulė - pokyčių istorija.</li>
          <li>Gydytojų įrašai (f025/a).</li>
          <li>Gydytojo siuntimai / išrašai (f027/a).</li>
          <li>Mokinio pažymėjimai (f027-1/a I, II).</li>
          <li>Receptai.</li>

          <li>Nuotraukos, įvairūs dokumentai.</li>
          <li>Klientų duomenų bazės importavimas / eksportavimas.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Teisės</h3>
        <ul>
          <li>Autorizuoti prisijungimai su PIN kodu.</li>
          <li>Teisių valdyti sistemą priskyrimas pagal pareigas, filialus.</li>
          <li>Funkcija „Matyti tik savo užsakymų registravimo kalendorių“.</li>
          <li>Darbo laiko pradžios ir pabaigos kontrolė.</li>
          <li>Nedarbo priežasčių kūrimas.</li>
          <li>Darbo tvarkaraščio spausdinimas su pastabomis.</li>
          <li>
            Komunikacija tarp darbuotojų sistemoje, asmeniniai ir grupiniai Pop-Up priminimai.
          </li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Sutartys | Gydymo protokolų šablonų kūrimas</h3>
        <ul>
          <li>Sutartys, sutikimai, informaciniai pranešimai, A4 / A5 dokumentai.</li>
          <li>Šablonų kūrimo įrankiai gydytojo įrašams.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Gydymo plano sudarymas</h3>
        <ul>
          <li>Gydymo plano sąmata, pastabos.</li>
          <li>Suplanuotų paslaugų registravimas kalendoriuje.</li>
          <li>Sąmatų istorija gydymo alternatyvoms.</li>
          <li>
            Įvairios spausdinimo formos, eksportavimas į planšetes elektroniniam parašui, siuntimas
            el. paštu.
          </li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>TLK kompensacijų administravimas</h3>
        <ul>
          <li>Teritorinių ligonių kasų kompensuojamų lėšų apskaita ir likučių kontrolė.</li>
          <li>Užbaigtų ir vykdomų gydymų paslaugų ataskaita.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Sąsaja su E sveikata</h3>
        <ul>
          <li>
            Automatinis duomenų sinchronizavimas į ESPBI IS: <br /> - gydytojo įrašai;
            <br />
            - siuntimai, išrašai;
            <br /> - moksleivių pažymos; <br /> - receptai.
          </li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Ataskaitos</h3>
        <ul>
          <li>Klientų lankomumo ataskaita.</li>
          <li>Išsiųstų ir gautų SMS žinučių ataskaitos.</li>
          <li>Užsakymų ir registratūros veiklos ataskaita.</li>
          <li>Klientų grįžtamumo ataskaita.</li>
          <li>Darbo laiko apskaita (planai / nedarbas / atliktų paslaugų trukmė, tabelis).</li>
          <li>Pajamų ir įplaukų ataskaita.</li>
          <li>Nuolaidų ir lojalumo programos ataskaita.</li>
          <li>Avansinių įmokų (dovanų kuponų, abonimentų, avansinių mokėjimų) ataskaita.</li>
          <li>Skolų ataskaita.</li>
          <li>Darbo užmokesčio ataskaita.</li>
          <li>Darbo priemonių apskaita.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Prekių sandėlis</h3>
        <ul>
          <li>Mažmeninė ir didmeninė prekyba FIFO principu.</li>
          <li>Spalvinės užsakymų žymos pagal vykdymo ir apmokėjimo būseną.</li>
          <li>Prekių pardavimo kainų lygiai, nuolaidų ir antkainių sistema.</li>
          <li>Paslaugų sąsaja su prekių sandėliu savikainų kūrimui.</li>
          <li>Darbuotojų motyvavimo programa, skatinanti prekių pardavimus.</li>
          <li>
            Dokumentai pagal filialus, sandėlius (pirkimai, grąžinimai, korekcijos, nurašymai).
          </li>
          <li>Pardavimo dokumentų siuntimas el. paštu.</li>
          <li>Darbo priemonių išdavimo darbuotojams kontrolė.</li>
          <li>Prekių užsakymai iš tiekėjų el. paštu, ribinio kiekio kontrolė.</li>
          <li>Prekių inventorizacija.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Kasa</h3>
        <ul>
          <li>Sąsaja su Empirija, UAB kasos įranga.</li>
          <li>Kasos operacijos atliekamos pačioje sistemoje.</li>
          <li>
            Mokėjimai grynais, kortele, bankiniu pavedimu, avansinių įmokų/ dovanų kuponų
            naudojimas.
          </li>
          <li>Pajamų ir išlaidų orderiai.</li>
          <li>Ataskaitos pagal kasos aparatus, filialus, mokėjimo būdą.</li>
          <li>Prekių rekomendavimo žymėjimas.</li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Sąsaja su buhalterine programa Rivilė</h3>
        <ul>
          <li>
            Duomenų eksportas pagal darbuotojus / filialus ir sandėlius:
            <br />- pardavimai (pajamos, įplaukos, klientai); <br />- prekių judėjimo dokumentai
            (pirkimai, grąžinimai, korekcijos, nurašymai).
          </li>
        </ul>
      </div>
      <div className={style.order_reg}>
        <h3>Filialų valdymas</h3>
        <ul>
          <li>Bendra duomenų bazė neribotam filialų skaičiui.</li>
          <li>Atskiri registracijų kalendoriai, filialų veiklos ataskaitos.</li>
        </ul>
      </div>
    </div>
  );
}
