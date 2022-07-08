import Link from "next/link";
import { Earth } from "svg/Earth";

export function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <h3>serve</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Įranga</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Palaikymas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privatumo politika</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="right">
        <button className={"footer__lang-button"}>
          <Earth />
          <span>Lietuviu</span>
        </button>
      </div>
    </footer>
  );
}
