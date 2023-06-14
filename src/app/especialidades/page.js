'use client'

import { Brands } from "../components/Brands/Brands";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Armonizacion } from "../components/Pages/Especialidades/Armonizacion";
import { Banner } from "../components/Pages/Especialidades/Banner";
import { Endodoncia } from "../components/Pages/Especialidades/Endodoncia";
import { Implantologia } from "../components/Pages/Especialidades/Implantologia";
import { Oral } from "../components/Pages/Especialidades/Oral";
import { Ortodoncia } from "../components/Pages/Especialidades/Ortodoncia";
import { PanelText } from "../components/Pages/Especialidades/PanelText";
import { Periodoncia } from "../components/Pages/Especialidades/Periodoncia";
import { Regeneracion } from "../components/Pages/Especialidades/Rageneracion";

export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <PanelText />
            <Implantologia />
            <Ortodoncia />
            <Endodoncia />
            <Oral />
            <Regeneracion />
            <Periodoncia />
            <Armonizacion />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}