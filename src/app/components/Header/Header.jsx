'use client'

import { useEffect, useRef, useState } from "react"
import { HeaderContent } from "@/app/styles/Header"
import hamburger from '@/app/assets/iconos/hamburger.svg'
import contacto from '@/app/assets/iconos/contacto.svg'
import facebook from '@/app/assets/iconos/facebook.svg'
import instagram from '@/app/assets/iconos/instagram.svg'
import logo from '@/app/assets/logos/logo.svg'
import Link from "next/link"
import { MyImages } from "../images/MyImages"
import xs from '@/app/assets/iconos/xs.svg'
import { ButtonComplete } from "@/app/styles/Buttons/Buttons"

export const Header = () => {

    const headers = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 0) {
                headers.current?.classList?.add('header-down');
            } else {
                headers.current?.classList?.remove('header-down');
            }
        };
    }, []);

    useEffect(() => {

    }, [isMenuOpen])

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMenuOpen(false)
    }

    return (
        <HeaderContent>
            <nav ref={headers} className="header-container">
                <ul>
                    <li>
                        <div className="open-menu" onClick={() => setIsMenuOpen(true)}>
                            {MyImages(hamburger)}
                            <p>Menú</p>
                        </div>
                    </li>
                    <li>
                        <Link href="/">
                            <div className="logo">
                                {MyImages(logo)}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="rrss-header">
                            <a href="https://a878ac7020d193c1dc78740f7966df3c6a02c5e8.agenda.softwaredentalink.com/agendas/agendamiento" target="_blank">
                                <ButtonComplete><p>Agendar hora</p></ButtonComplete>
                            </a>
                            <a href="#contact">
                                {MyImages(contacto)}
                            </a>
                            <Link href="https://www.facebook.com/cphsalud" target="_blank">
                                {MyImages(facebook)}
                            </Link>
                            <Link href="https://www.instagram.com/cphsalud" target="_blank">
                                {MyImages(instagram)}
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="header-open animate__animated animate__fadeIn animate__faster" style={isMenuOpen === true ? { 'display': 'block' } : null} >
                <div className="bg" style={isMenuOpen === true ? { 'opacity': 1 } : null} onClick={() => setIsMenuOpen(false)}></div>
                <div className="circle animate__animated animate__fadeInLeft animate__faster">
                    <div className="rounded" onClick={() => setIsMenuOpen(false)}>
                        {MyImages(xs)}
                    </div>
                </div>
                <nav className="animate__animated animate__fadeInLeft animate__faster">
                    <ul>
                        <li>
                            <Link href="/" onClick={handleTop}>
                                <p>Inicio</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sobre-nosotros" onClick={handleTop}>
                                <p>Sobre nosotros</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profesionales" onClick={handleTop}>
                                <p>Profesionales</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/especialidades" onClick={handleTop}>
                                <p>Especialidades</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/bioseguridad" onClick={handleTop}>
                                <p>Bioseguridad</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/informacion-paciente" onClick={handleTop}>
                                <p>Informacion al paciente</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/politicas-privacidad" onClick={handleTop}>
                                <p>Políticas de Privacidad</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderContent>
    )
}
