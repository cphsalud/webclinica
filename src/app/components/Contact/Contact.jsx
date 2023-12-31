'use client'

import { ContactContainer } from '@/app/styles/Contact';
import { MyImages } from '../images/MyImages';
import email from '@/app/assets/iconos/email.svg';
import ws from '@/app/assets/iconos/ws.svg';
import location from '@/app/assets/iconos/location.svg';
import Link from 'next/link';

export const Contact = () => {
    return (
        <ContactContainer id="contact">
            <div className="title">
                <h1>Ven a conocer CPH Salud</h1>
                <p>Reserva tu cita Odontológica con nosotros</p>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="icon">
                        {MyImages(email)}
                    </div>
                    <div className="content">
                        <h3>Por email</h3>
                        <a href="mailto: contacto@cphsalud.cl">contacto@cphsalud.cl</a>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        {MyImages(ws)}
                    </div>
                    <div className="content">
                        <h3>Por WhatsApp</h3>
                        <Link href="https://wa.me/56962077579" target='_blank'>Click aqui</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        {MyImages(location)}
                    </div>
                    <div className="content">
                        <h3>Estamos aquí</h3>
                        <a href="https://goo.gl/maps/5pEFTS3fBGf3aUmHA" target='_blank'>
                            <p>Ahumada 254 oficina 307  <br /> Santiago, Región Metropolitana</p>
                        </a>
                    </div>
                </div>
            </div>
        </ContactContainer>
    )
}
