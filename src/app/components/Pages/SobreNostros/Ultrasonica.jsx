import img from '@/app/assets/sobre-nosotros/ultrasonica.jpeg';
import { BannerFullTxtRigth } from '../../Banners/BannerFullTxtRight';

export const Ultrasonica = () => {

    const title = 'Centrífuga ultrasónica';
    const text = 'En nuestras cirugías regenerativas tomamos una pequeña muestra de sangre del paciente, que es procesada en una centrífuga ultrasónica para obtener Fibrina Rica en Plaquetas, sustancia rica en células madre para una mejor regeneración del tejido.';
    const top = '0';
    const background = 'linear-gradient(270deg, rgba(80, 79, 163, 0.74) 0%, rgba(81, 79, 163, 0.16) 100%)';

    return (
        <>
            {BannerFullTxtRigth(img, title, text, top, background)}
        </>
    )
}
