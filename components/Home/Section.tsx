import style from "./home.module.scss";
import { ReactNode, useEffect, useState } from "react";

type SectinType = {
  children?: ReactNode | string;
  title?: string;
  bgColor?: string;
  flex?: string;
  mt?: string;
  mb?: string;
  mobileMt?: string;
  mobileMb?: string;
  itemsClass?: string;
};
export function Section({
  children,
  title = "Title",
  bgColor = "#ffffff",
  flex = "center",
  mt = "0",
  mb = "0",
  mobileMt = "0",
  mobileMb = "0",
  itemsClass = "",
}: SectinType) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true);
  }, []);
  return (
    <section
      className={style.home__section}
      style={{
        background: bgColor,
        marginTop: isMobile ? mobileMt : mt,
        marginBottom: isMobile ? mobileMb : mb,
      }}
    >
      <p>
        {title.split("|").map((el, i) => {
          return title[i + 1] ? (
            <span key={i.toString()}>
              {el}
              <br />
            </span>
          ) : (
            <span key={i.toString()}>{el}</span>
          );
        })}
      </p>
      <div
        className={`
                ${style.home__section_content} 
                ${
                  flex === "center"
                    ? style.home__section_content_center
                    : style.home__section_content_between
                }`}
      >
        {children}
      </div>
    </section>
  );
}
