import { Isvg } from "./Interface";

export default function Search({ unicClass }: Isvg) {
  return (
    <svg
    className={`svg__icon ${unicClass}`}
      fill="none"
      stroke="#0f1d5b"
      viewBox="00 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
}
