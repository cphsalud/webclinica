'use client'

import { Brands } from "../components/Brands/Brands";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Pages/Bioseguridad/Banner";
import { BioTextFour } from "../components/Pages/Bioseguridad/BioTextFour";
import { BioTextThree } from "../components/Pages/Bioseguridad/BioTextThree";
import { BioTxtTwo } from "../components/Pages/Bioseguridad/BioTextTwo";
import { BioTxtOne } from "../components/Pages/Bioseguridad/BioTxtOne";
import { PanelText } from "../components/Pages/Bioseguridad/PanelText";
import { PanelTextTwo } from "../components/Pages/Bioseguridad/PanelTextTwo";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <PanelText />
            <BioTxtOne />
            <PanelTextTwo />
            <BioTxtTwo />
            <BioTextThree />
            <BioTextFour />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}
