import style from "./buttons.module.scss";

interface IbackButton {
  unicClass?: String;
}
export default function BackButton({ unicClass }: IbackButton) {
  return (
    <div className={style.back_button}>
      <span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </span>
    </div>
  );
}
