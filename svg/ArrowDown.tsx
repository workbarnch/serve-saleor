import { Isvg } from "./Interface";

export default function ArrowDown({ unicClass }: Isvg) {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg__icon ${unicClass}`}
    >
      <path d="M1 1L5 5L9 1" stroke="#0f1d5b"></path>
    </svg>
  );
}
