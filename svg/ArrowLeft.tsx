import { Isvg } from "./Interface";

export default function ArrowLeft({ unicClass }: Isvg) {
  return (
    <svg
      className={"w-6 h-6 " + unicClass}
      fill="#0f1d5b;"
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
  );
}
