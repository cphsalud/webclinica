import React from 'react'
import img from '@/app/assets/sobre-nosotros/doc.jpg';
import { BannerFullTxtRigth } from '../../Banners/BannerFullTxtRight';

export const Vision = () => {

    const titleColor = {
        'background': 'linear-gradient(98.28deg, #BCBCBC 1.38%, #0890DC 99.28%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
    };

    const textColor = {
        'color': '#878790',
        'fontWeight': '400',
    };

    const title = 'Visión amplificada';
    const text = 'Los lentes de visión amplificada con luces LED ayudan a nuestros cirujanos a tener una mejor precisión durante sus procedimientos. Al tener una imagen ampliada de la zona intervenida, no pasan por alto ningún detalle, logrando resultados mucho más estéticos y duraderos.';
    const top = '10%';
    const background = 'linear-gradient(270.02deg, #FFFFFF 0.01%, rgba(255, 255, 255, 0) 206.47%);';

    return (
        <>
            {BannerFullTxtRigth(img, title, text, top, background, titleColor, textColor)}
        </>
    )
}