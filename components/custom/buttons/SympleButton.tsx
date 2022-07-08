import style from "./buttons.module.scss";

type TypeButton = {
  children?: string | "Button";
  onClick?: () => {};
  type?: string | "light";
  unicClass?: string;
};

export function SympleButton({ children, onClick, type, unicClass }: TypeButton) {
  return (
    <button
      className={`${type === "dark" ? style.symple__button_dark : style.symple__button__light} ${
        style.symple__button
      } ${unicClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
