import { useState } from "react";
import style from "../textarea/textArea.module.scss"

interface ITextarea {
  name?: string,
  id?: string
}

export default function TextAreaExample({
  name,
  id
}: ITextarea) {
  const [summary, setSummary] = useState("")
  return (
    <div className={style.textArea_content}>
      <textarea
        name={name ? name : ""}
        id={id ? id : ""}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Papasakokite mums daugiau, kad mes galėtume Jums duoti geresni pasiūlymą."
      ></textarea>
    </div>
  );
}
