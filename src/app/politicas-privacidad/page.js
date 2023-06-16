'use client'

import { Brands } from "../components/Brands/Brands"
import { Contact } from "../components/Contact/Contact"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Banner } from "../components/Pages/Politicas/Banner"
import { Politicas } from "../components/Pages/Politicas/Politicas"



export default function Page() {
    return (
        <>
            <Header />
            <Banner />
            <Politicas />
            <Contact />
            <Brands />
            <Footer />
        </>
    )
}