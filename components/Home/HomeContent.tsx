import style from "./home.module.scss";
import { HomeCard } from "./HomeCard";
import img1 from "../../images/img_2.png";
import img2 from "../../images/img_3.png";
import tooth from "../../images/icons/tooth.svg";

export function HomeContent() {
  return (
    <section className={style.home__content}>
      <div className={style.home__content_absolute}>
        <div className={style.home__content_absalute_item}>
          <ul>
            <li>
              <div className={style.home__content_absolute_img}>{tooth()}</div>
              <p>Odontologijos klinikoms</p>
            </li>
            <li>
              <div className={style.home__content_absolute_img}>{tooth()}</div>
              <p>Odontologijos klinikoms</p>
            </li>
            <li>
              <div className={style.home__content_absolute_img}>{tooth()}</div>
              <p>Odontologijos klinikoms</p>
            </li>
          </ul>
          <div className={style.home_content_absalute_item}>
            <ul>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
            </ul>
            <ul>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
              <li>
                <div className={style.home__content_absolute_img}>{tooth()}</div>
                <p>Odontologijos klinikoms</p>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
      <span className={style.home__content_elipse}></span>
      <div className={style.home__content_header}>
        <h2>Patogus informacijos valdymas ir procesų automatizavimas</h2>
        <p>Užsakymų administravimo, pardavimų ir apskaitos įrankiai</p>
      </div>
      <div className={style.home__content_container_wrapper}>
        <div className={style.home__content_container}>
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={"Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu"}
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
          <HomeCard
            img={img1.src}
            icon={img2.src}
            title={"Registracijų kalendorius"}
            description={
              "Darbo planavimas ir klientų aptarnavimas - bet kokiu kompiuteriniu ar mobiliuoju įrenginiu, bet kurioje vietoje ir bet"
            }
            unicClass={style.home__content_card}
          />
        </div>
      </div>
    </section>
  );
}
