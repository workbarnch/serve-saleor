import { useRouter } from "next/router";
import Link from "next/link";
import { useRegions } from "../RegionsProvider";
import { useMainMenuQuery } from "@/saleor/api";

export function HomePageHeader() {
  const router = useRouter();
  const { query } = useRegions();

  const { error, data } = useMainMenuQuery({
    variables: { ...query },
  });

  return (
    <header className={"home__page_header"}>
      <div className="logo">
        <Link href={"/"}>
          <a>
            <h3>serve</h3>
          </a>
        </Link>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-ul">
          {data?.menu?.items?.map((item, i) => {
            return (
              <li
                className={`${router.pathname == item.page?.slug ? "active" : ""} ${
                  item.children?.length ? "drop__down-menu" : ""
                }`}
                key={item.id + i.toString}
              >
                <Link href={item.page?.slug || ""}>
                  <a>
                    {item.name}
                    {item.children?.length ? (
                      <div className="header__submenu">
                        <div className="header__submenu-overlay"></div>
                        <ul className="header__submenu-content">
                          {item.children?.map((child, i) => (
                            <li key={child.id + i.toString()}>{child.name}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={"home__page_header-button"}>Prisijungti</button>
    </header>
  );
}
