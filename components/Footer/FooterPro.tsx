import { Earth } from "../../svg/Earth";

export function FooterPro() {
  return (
    <footer className="footer__pro">
      <div className="footer__pro__border__top"></div>
      <div className="logo__pro">
        <p>serve</p>
        <span>pro</span>
      </div>
      <div className="right">
        <button className={"footer__pro__lang-button"}>
          <Earth />
          <span>Lietuviu</span>
        </button>
      </div>
    </footer>
  );
}
