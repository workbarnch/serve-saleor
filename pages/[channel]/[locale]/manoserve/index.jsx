import SmartContent from "../../src/components/navbar/SmartContent";
import PageTitle from "../../src/components/pagetitle/PageTitle";
import { Bills } from "../../src/components/manoserve/Bills";
import Signatories from "../../src/components/payment_methods/signecontract/Signeatories";
import ChangeLoginDetails from "../../src/components/payment_methods/editprofinfo/ChangeLoginDetails";
import NewPassword from "../../src/components/payment_methods/editprofinfo/NewPassword";
import Request from "../../src/components/request/Request"
import CanselPlan from "../../src/components/payment_methods/CancelPlan";
import TerminatPlan from "../../src/components/payment_methods/TerminatPlan";
import PaymentHistory from "../../src/components/payment_methods/PaymentHistory";
import ContractForm from "../../src/components/payment_methods/signecontract/ContractForm";
import MyCards from "../../src/components/payment_methods/MyCards";
import HandServe from "../../src/components/payment_methods/HandServe";
import ControlCode from "../../src/components/payment_methods/signecontract/ControlCode";
import EditProfInfo from "../../src/components/payment_methods/editprofinfo/EditProfInfo";
import CompaniDetails from "../../src/components/payment_methods/companydetails/CompanyDetalis"
import NaturalPersonData from "../../src/components/payment_methods/companydetails/NaturalPersonData"
import Header from "../../src/components/header/Header";
import {Footer} from "../../src/components/footer/Footer";



export default function ManoServe() {
  const data = [
    {
      text: "Planai ir mokėjimo būdai",
      content: (
        <Signatories
          title={"Sutarties pasirašymas"}
          date={"Sutarties data: 2022-06-05"}
          number={"Nr.: LC00001"}
        />
      ),
    },
    {
      text: "Sąskaitos",

      content: <Bills />,
    },
    {
      text: "Sutartis",

      content: <EditProfInfo />
    },
    {
      text: "Prisijungimas",
      content: <NewPassword /> ,
    },
    {
      text: "Bendri duomenys",
      content: <CompaniDetails />,
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <PageTitle title="Sąskaitos" />
      <div className="container">
        <SmartContent data={data} />
      </div>
      <Footer />
    </div>
  );
}
