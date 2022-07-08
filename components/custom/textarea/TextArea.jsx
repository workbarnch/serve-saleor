import { useState } from "react";
import style from "../textarea/textArea.module.scss"



export default function TextAreaExample(props) {
  const [summary, setSummary] = useState("")
  return (
    <div className={style.textArea_content}>
      <textarea
        name={props.name ? props.name : ""}
        id={props.id ? props.id : ""}
        cols="30"
        rows="10"
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Papasakokite mums daugiau, kad mes galėtume Jums duoti geresni pasiūlymą."
      ></textarea>
    </div>
  );
}
