import { Footer } from "@/components"
import Header from "@/components/Headers/Header"
import PageTitle from "@/components/pagetitle/PageTitle"
import { Prices } from "@/components/prices/Prices"

export default function Kainos(){
   
    return (
        <div className="wrapper">
            <Header/>
            <PageTitle title="Kainos" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />
            <div className="container">
                <Prices/>
            </div>
            <Footer />
        </div>
    )
}
