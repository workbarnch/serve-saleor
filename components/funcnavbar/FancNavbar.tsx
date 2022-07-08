import style from "../funcnavbar/funcnavbar.module.scss";
import { ReactNode, useEffect, useState } from "react";

interface IFuncNavbarObject {
  bg?: string;
  svg?: string;
  text?: string;
  content: ReactNode | string;
}

interface IFuncNavbar {
  data: IFuncNavbarObject[];
}

export default function FuncNavbar({ data = [] }: IFuncNavbar) {
  const [jsx, setJsx] = useState<any>(data[0].content!);
  const [activeItemId, setActiveItemId] = useState(0);
  const [size, setSize] = useState(1920);
  const mobile = 768;

  const changeContent = (e: any) => {
    let getId: any = (elem: any) =>
      !elem.dataset.id ? getId(elem.parentElement) : elem.dataset.id;
    setJsx(data[getId(e.target)].content);
    setActiveItemId(getId(e.target));
  };
  useEffect(() => {
    window.addEventListener("load", (e) => {
      if (window.innerWidth <= mobile) {
        setSize(mobile);
      } else {
        setSize(1920);
      }
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= mobile) {
        setSize(mobile);
      } else {
        setSize(1920);
      }
    });
  }, []);
  return (
    <div className={style.smart__content_base_conteainer}>
      <nav>
        <ul>
          {data.map((item, idx) => {
            return (
              <li data-id={idx} key={idx + Math.random()} onClick={changeContent}>
                <button
                  data-id={idx}
                  className={`${style.servicBlock} ${activeItemId == idx ? style.active : ""}`}
                >
                  <span className={style.img_wrap} style={{ background: item.bg }}>
                    {item.svg}
                  </span>
                  <span className={style.base_btn}>{item.text}</span>
                </button>
                {idx == activeItemId && size <= mobile ? (
                  <section className={`${style.mobile__content}`}>{jsx}</section>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {size > mobile ? <section className={style.content}>{jsx}</section> : null}
    </div>
  );
}
