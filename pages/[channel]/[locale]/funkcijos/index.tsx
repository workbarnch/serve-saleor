
import tooth from "../../../../images/icons/tooth.svg";
import grozi from "../../../../images/icons/grozi.svg";
import klinikos from "../../../../images/icons/klinikos.svg";
import spa from "../../../../images/icons/spa.svg";
import reab from "../../../../images/icons/reab.svg";
import sporto from "../../../../images/icons/sporto.svg";
import veterinar from "../../../../images/icons/veterinar.svg";
import autoservisa from "../../../../images/icons/autoservisa.svg";
import hands from "../../../../images/icons/hands.svg";
import FunctionsPage from "@/components/functionspage/FunctionsPage";
import { HomePageHeader } from "@/components/Headers/HomePageHeader";
import PageTitle from "@/components/pagetitle/PageTitle";
import { Footer } from "@/components";
import FuncNavbar from "@/components/funcnavbar/FancNavbar";




export default function Fankcijos(){
  console.log();
   const colors = {
          b1: "linear-gradient(130.1deg, #EBF0FB 14.15%, #FBFCFE 87.6%)",
          b2: "linear-gradient(127.18deg, #FBE9ED 12.08%, #FEFAFB 91.53%)",
          b3: "linear-gradient(135.7deg, #E9FDFD 13.06%, #F8FEFE 86.58%)",
          b4: "linear-gradient(137.49deg, #FAEBF6 10.2%, #FEFAFD 85.64%)",
          b5: "linear-gradient(133.15deg, #FBF3EA 14.25%, #FEFCF9 88.13%)",
          b6: "linear-gradient(137.35deg, #FDF9E9 13.26%, #FFFEF9 86%)",
          b7: "linear-gradient(138.37deg, #E9F6FD 9.98%, #FAFDFE 86.13%)",
          b8: "linear-gradient(137.04deg, #EBEFF9 12.15%, #FBFCFE 87.54%)",
          b9: "linear-gradient(139.43deg, #EFE9FA 13.41%, #FBFAFE 86.77%)",

   }
    const data = [
        {
          bg: colors.b1,
          svg: tooth(),
          text: "Odontologijos klinikoms",
          content: <FunctionsPage />
        },
        {
            bg: colors.b2,
            svg: klinikos(),
            text: "Klinikoms ir estetinės medicinos įstaigoms",
            content: <div>Lorem ipsum</div>
          },
          {
            bg: colors.b3,
            svg: veterinar(),
            text: "Veterinarijos klinikoms",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg: colors.b4,
            svg: grozi(),
            text: "Grožio centrams ir kirpykloms",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg: colors.b5,
            svg: sporto(),
            text: "Sporto centrams",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg: colors.b6,
            svg: spa(),
            text: "SPA ir masažo centrams",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg: colors.b7,
            svg:reab(),
            text: "Reabilitacijos centrams",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg: colors.b8,
            svg: autoservisa(),
            text: "Autoservisų paslaugoms",
            content:  <div>Lorem ipsum</div>
          },
          {
            bg:colors.b9,
            svg:hands(),
            text: "Patalpų valymo paslaugoms",
            content:  <div>Lorem ipsum</div>
          },

      ];
    return (
        <div className="wrapper">
            <HomePageHeader />
          
            <div className="header__padding"></div>
            <PageTitle title="Funkcijos" subTitle="Serve Professionals sistemos privalumai" />
            <div className="container">
            <FuncNavbar data={data} />
            </div>
            <Footer />
        </div>
    )
}
