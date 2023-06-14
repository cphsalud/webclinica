'use client'

import { Brands } from "../components/Brands/Brands";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Pages/Informacion/Banner";
import { Derechos } from "../components/Pages/Informacion/Derechos";
import { Fonasa } from "../components/Pages/Informacion/Fonasa";
import { Garantias } from "../components/Pages/Informacion/Garantias";
import { Horarios } from "../components/Pages/Informacion/Horarios";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Garantias />
            <Derechos />
            <Fonasa />
            <Horarios />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}
