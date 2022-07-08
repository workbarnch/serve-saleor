import style from "./pagetitle.module.scss";
interface IPageTitle {
  title?: string;
  subTitle?: string;
}

export default function PageTitle({ title, subTitle }: IPageTitle) {
  return (
    <div className={style.container}>
      <div className={style.home_page}>
        <div className={style.title_container}>
          <div className={style.titleWrap}>
            <h2>{title}</h2>
          </div>
          {subTitle ? <p>{subTitle}</p> : null}
        </div>
      </div>
    </div>
  );
}
