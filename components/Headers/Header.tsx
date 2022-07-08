import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="logo">
        <Link href={"/"}>
          <a>
            <h3>serve</h3>
          </a>
        </Link>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-ul">
          <li className={router.pathname == "/kainos" ? "active" : ""}>
            <Link href="/kainos">
              <a>Kainos</a>
            </Link>
          </li>
          <li className={router.pathname == "/funkcijos" ? "active" : ""}>
            <Link href="/funkcijos">
              <a>Funkcijos</a>
            </Link>
          </li>
          <li className={router.pathname == "/funkcijos" ? "active" : ""}>
            <Link href="/funkcijos">
              <a>Atsiliepimai</a>
            </Link>
          </li>
          <li className={router.pathname == "/kontaktai" ? "active" : ""}>
            <Link href="/kontaktai">
              <a>Kontaktai</a>
            </Link>
          </li>
          <li className={router.pathname == "/manoserve" ? "active" : ""}>
            <Link href="/manoserve">
              <a>Mano Serve</a>
            </Link>
          </li>
          <li className={router.pathname == "/atsijungti" ? "active" : ""}>
            <Link href="/atsijungti">
              <a>Atsijungti</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
