import BusinessInfo from "../../src/components/businessInfo/BusinessInfo";
import RegPassword from "../../src/components/registration/RegPassword";
import Registration from "../../src/components/registration/Registration";
import UserPassword from "../../src/components/registration/UserPassword";
import YourData from "../../src/components/yourData/YourData";
import ChangePass from "../../src/components/registration/ChangePass";
import LoginReg from "../../src/components/registration/LoginReg";
import CompanyDetails from "../../src/components/payment_methods/companydetails/CompanyDetalis";
import NaturalPersonData from "../../src/components/payment_methods/companydetails/NaturalPersonData";
import UserName from "../../src/components/registration/UserName"



export default function Prisijungti() {
  return (
    <div className="wrapper">
      <Registration />
      <BusinessInfo />
      <UserName danger={'Mums nepavyko rasti vartotojo su šiuo el. pašto adresu.'}/>
      <LoginReg />
      <ChangePass/>
      <UserPassword />
      <YourData />
      <RegPassword/>
    </div>
  );
}
