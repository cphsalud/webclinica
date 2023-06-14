'use client'

import { Brands } from "../components/Brands/Brands";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Pages/SobreNostros/Banner";
import { BoxAbout } from "../components/Pages/SobreNostros/BoxAbout";
import { PanelText } from "../components/Pages/SobreNostros/PanelText";
import { Piezo } from "../components/Pages/SobreNostros/Piezo";
import { RayosX } from "../components/Pages/SobreNostros/RayosX";
import { Ultrasonica } from "../components/Pages/SobreNostros/Ultrasonica";
import { Vision } from "../components/Pages/SobreNostros/Vision";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <PanelText />
            <RayosX />
            <Piezo />
            <Ultrasonica />
            <Vision />
            <BoxAbout />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}