'use client'

import { FooterContainer } from "@/app/styles/Footer"
import { MyImages } from "../images/MyImages"
import logo from '@/app/assets/logos/logo.svg'

export const Footer = () => {

    const fecha = new Date()
    const year = fecha.getFullYear()

    return (
        <FooterContainer>
            <div className="text">
                <p>Copyright © {year} | Clinica Padre Hurtado Todos los derechos reservados</p>
            </div>
            <div className="logo">
                {MyImages(logo)}
            </div>
        </FooterContainer>
    )
}
