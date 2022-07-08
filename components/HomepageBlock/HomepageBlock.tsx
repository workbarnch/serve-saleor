import React from "react";
import { useIntl } from "react-intl";
import { usePaths } from "@/lib/paths";
import { HomepageBlockFragment, ProductFilterInput } from "@/saleor/api";
import { HomeHeader } from "../Home/HomeHeader";
import { HomeContent } from "../Home/HomeContent";
import { Section } from "../Home/Section";
import { SympleButton } from "../custom/buttons/SympleButton";
import { InfoBlock } from "../Home/InfoBlock";
import { Footer } from "../Footer/Footer";
import Logo from "../../images/Logo.png";
import Logo1 from "../../images/Logo-1.png";
import Logo2 from "../../images/Logo-2.png";
import Logo3 from "../../images/Logo-3.png";
import Logo4 from "../../images/Logo-4.png";
import Navbar from "../Navbar";
export interface HomepageBlockProps {
  menuItem: HomepageBlockFragment;
}

export function HomepageBlock() {
  const paths = usePaths();
  const t = useIntl();
  const filter: ProductFilterInput = {};

  return (
    <div>
      <HomeHeader />
      <HomeContent />
      <Section
        title={"Parašykite mums ir atsiųsime | jums tinkamiausią pasiūlymą! "}
        mt={"144px"}
        mobileMt={"96px"}
        bgColor={"#FAF1E5"}
      >
        <SympleButton type={"dark"}>Susisiekite</SympleButton>
      </Section>
      <Section title={"Mūsų klientai"} flex={"between"}>
        <img src={Logo.src} alt="logo" />
        <img src={Logo1.src} alt="logo" />
        <img src={Logo2.src} alt="logo" />
        <img src={Logo3.src} alt="logo" />
        <img src={Logo4.src} alt="logo" />
      </Section>
      <InfoBlock />
      <Footer />
    </div>
  );
}

export default HomepageBlock;
