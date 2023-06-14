'use client'

import { Brands } from "../components/Brands/Brands";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { BannerOne } from "../components/Pages/Doctores/BannerOne";
import { Profiles } from "../components/Pages/Doctores/Profiles";
import { TitleOneDoctores } from "../components/Pages/Doctores/TitleOneDoctores";

export default function Page() {
    return (
        <>
            <Header />
            <BannerOne />
            <TitleOneDoctores />
            <Profiles />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}

