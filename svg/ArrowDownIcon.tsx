import { Isvg } from "./Interface";

export default function ArrowDownIcon({unicClass}: Isvg) {
    return (
        <svg className={`svg__icon ${unicClass}`} width="14" height="10" viewBox="0 0 14 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M0.699219 5V0.5L6.99922 5L13.2992 0.5V5L6.99922 9.5L0.699219 5Z" fill="white"/>
        </svg>
    );
}
